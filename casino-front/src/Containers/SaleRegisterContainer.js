import { connect } from 'react-redux';
import SalesForm from "../UI/Sales/SalesForm";

const mapStateToProps = (state) => {
    return{
        userInfo: state.session
    };
};

export default connect(mapStateToProps)(SalesForm);