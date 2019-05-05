import {connect} from 'react-redux';
import {toggleCreationModal} from "../Store/Actions/UserActions";
import UsersList from "../UI/Users/Users";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.user.showCreationModal
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);