import {connect} from 'react-redux';
import {LastWinnersList} from './LastWinnersList';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
        winnersList: [
            {
                id: 0,
                creator: '0xF0CEe1E2C47744ad880547306a45332aDdAb8D54',
                rate: '0.04250',
                cryptoСurrency: 'ETH',
                date: "30.12.19"
            },
            {
                id: 1,
                creator: '0xF0CEe1E2C47744ad880547306a45332aDdAb8D54',
                rate: '0.04250',
                cryptoСurrency: 'ETH',
                date: "30.12.19"
            },
            {
                id: 2,
                creator: '0xF0CEe1E2C47744ad880547306a45332aDdAb8D54',
                rate: '0.04250',
                cryptoСurrency: 'ETH',
                date: "30.12.19"
            },
            {
                id: 3,
                creator: '0xF0CEe1E2C47744ad880547306a45332aDdAb8D54',
                rate: '0.04250',
                cryptoСurrency: 'ETH',
                date: "30.12.19"
            },
            {
                id: 4,
                creator: '0xF0CEe1E2C47744ad880547306a45332aDdAb8D54',
                rate: '0.04250',
                cryptoСurrency: 'ETH',
                date: "30.12.19"
            }
        ]
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LastWinnersList);