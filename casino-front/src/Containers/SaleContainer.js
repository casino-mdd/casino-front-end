import {connect} from 'react-redux'
import SalesList from "../UI/Sales/Sales";
import {fetchSales} from '../Store/Actions/SaleActions';

const mapStateToProps = (state) => {
    return {
        sales: state.sale.sales
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSales: () => dispatch(fetchSales())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesList)