import {connect} from 'react-redux';
import Login from '../UI/Account/login';
import {signIn} from '../Store/Actions/UserActions';
import NavigationBar from "../UI/GeneralComponents/Navigation";

const mapStateToProps = (state) => {
    return {
        isSigned: state.session.isSigned,
        isAdmin: state.session.isAdmin
    };
};
const mapDispatchToProps = (dispatch)  =>{
    return {
        signIn: (userInfo) => dispatch(signIn(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);