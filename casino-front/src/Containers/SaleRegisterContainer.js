import { connect } from 'react-redux';
import SalesForm from "../UI/Sales/SalesForm";
import {regSale} from "../Store/Actions/SaleActions";

const mapStateToProps = (state) => {
    return{
        userInfo: state.session
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        regSale:(saleInfo) => dispatch(regSale(saleInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesForm);