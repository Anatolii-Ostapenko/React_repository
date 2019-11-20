import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedItemNumber: null,
            taskName: '',
            id: 0
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({id: nextProps.tasks.length});
    } 
    setTasks=(e)=>{
        this.setState({taskName: e.target.value})
    }
    saveDataToStore=(e)=>{
        let obj = {};
        obj.id = this.state.id;
        for(let item of this.props.tasks){
            if(item.id === this.state.id){
                obj.id = this.props.tasks.length+1;
            }
        }
        obj.name = this.state.taskName;
        obj.arrayOfComments = [];
        this.props.addData(obj);
        this.setState({ taskName: ''});
        this.props.addDataTolocalStorage();
        e.preventDefault();
    }
    highlight=(index)=>{
        this.setState({selectedItemNumber: index})
    }
    removeItem=(e, id)=>{
        this.props.removeItem(id);
        this.props.addDataTolocalStorage();
        e.stopPropagation()
    }
    render(){
        let array = this.props.tasks ? this.props.tasks : [];
        
        return(
            <div className="wrapp-to-do-list">
                <h3 className='title'>Items</h3>
                <form onSubmit={this.saveDataToStore}>
                    <TextField
                        id="outlined-password-input"
                        label="Type name here..."
                        className="task-fild"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value={this.state.taskName}
                        onChange={(e)=>this.setTasks(e)}
                    />.
                    <Button variant="contained" className="add-new-task" type="submit" disabled={this.state.taskName === '' ? true : false} >Add new</Button>
                </form>
                <div>
                    {
                        array.map((item, index)=>{
                            let highlightToggle = ''
                            if(item.id === this.state.selectedItemNumber){
                                highlightToggle = 'wrapp-tasks highlight'
                            }else{
                                highlightToggle = 'wrapp-tasks'
                            }
                            return(
                                <div className={highlightToggle} key={index}>
                                    <div onClick={()=>{this.props.selectedItem(index); this.highlight(item.id)}} className='task-item'>
                                        <div className='wrapp-selected-task'>
                                            <p>{item.name}</p>
                                            <span className='number-of-comments'>{item.arrayOfComments.length}</span>
                                        </div>
                                        <Button onClick={(e)=>{this.removeItem(e, item.id)}} variant="outlined" color="secondary" className='delete-task-button'>Delete</Button> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        )
    }
}