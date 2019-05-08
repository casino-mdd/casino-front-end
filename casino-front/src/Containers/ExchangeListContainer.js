import {connect} from 'react-redux';
import ExchangeReport from "../UI/Exchange/ExchangeReport";
import {fetchExchanges} from '../Store/Actions/ExchangeActions';

const mapStateToProps = (state) => {
    return {
        exchanges: state.exchange.exchanges
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExchanges: () => dispatch(fetchExchanges())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeReport);