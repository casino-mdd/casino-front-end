import {connect} from 'react-redux';
import ExchangeForm from "../UI/Exchange/ExchangeForm";
import {getClientPoints, performExchange} from '../Store/Actions/ExchangeActions'

const mapStateToProps = (state) => {
    return {
        clientInfo: state.exchange.clientInfo,
        userInfo: state.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClientPoints: (clientId, userId) => dispatch(getClientPoints(clientId,  userId)),
        performExchange: (exchangeInfo) => dispatch(performExchange(exchangeInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeForm);