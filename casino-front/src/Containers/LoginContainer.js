import {connect} from 'react-redux';
import Login from '../UI/Account/login';
import {signIn} from '../Store/Actions/UserActions';

const mapStateToProps = (state) => {
    return {
        isSigned: state.session.isSigned
    };
};
const mapDispatchToProps = (dispatch)  =>{
    return {
        signIn: (userInfo) => dispatch(signIn(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);