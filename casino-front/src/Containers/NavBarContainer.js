import {connect} from 'react-redux';
import NavigationBar from "../UI/GeneralComponents/Navigation";
import {signOut} from '../Store/Actions/UserActions';

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    };
};

export default connect(null, mapDispatchToProps)(NavigationBar);