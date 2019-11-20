import React from 'react';
import TextField from '@material-ui/core/TextField';

export class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isSelectedItem: false,
            commentsArray: [],
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.item !== undefined){
            this.setState({isSelectedItem: true})
        }
        if(nextProps.tasks.length === 0){
            this.setState({isSelectedItem: false});
            this.setState({commentsArray: []});
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.tasks.length !== this.props.tasks.length) {
            this.setState({isSelectedItem: false});
        }
    }
    componentDidMount(){
        document.addEventListener('keydown', this.keydownHandler);
    }
    keydownHandler=(e)=>{
        if(this.state.message !== ''){
            if(e.keyCode===13 && e.ctrlKey){
                this.props.addMessage(this.state.message, this.props.item);
                this.setState({commentsArray: this.props.tasks});
                this.setState({message: ''});
                this.props.addDataTolocalStorage();
            }
        }
        
    }
    renderComments=()=>{
        for(let item of this.props.tasks){
            if(item.id === this.props.item){
                return(
                    <div>
                        {
                            item.arrayOfComments.map((comment, index)=>{
                                return(
                                    <div className='wrapp-render-comments' key={index}>
                                        <div className='avatar'></div>
                                        <p className='comment'>{comment}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        }
    }
    render(){
        if(!this.state.isSelectedItem){
            return (
                <div className='wrapp-comments'>
                    <p className='notice'>Please enter a name for the task and select it so you can post comments...</p>
                </div>
            )
        }else{
            return(
                <div className='wrapp-comments'>
                    <h3 className='title'>Comments # {this.props.item + 1}</h3>
                    {
                        this.renderComments()
                    }
                    <div className='wrapp-input-field'>
                        <div className='color'></div>
                        <TextField
                            multiline={true}
                            rows={5}
                            placeholder="Click to add a comment Ctrl+Enter"
                            margin="normal"
                            variant="outlined"
                            value={this.state.message}
                            onChange={(e)=>this.setState({message: e.target.value})}
                            className='text-field'
                        />
                    </div>
                   
                </div>
            )
        }
        
    }
}