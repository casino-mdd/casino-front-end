import {connect} from 'react-redux';
import {toggleCreationModal} from "../Store/Actions/UserActions";
import UsersList from "../UI/Users/Users";
import {createUser} from "../Store/Actions/UserActions";
import {fetchOffices} from "../Store/Actions/UserActions";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.user.showCreationModal,
        user: state.user.users,
        offices: state.user.offices
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag)),
        fetchOffices: () => dispatch(fetchOffices()),
        createUser: (userInfo) => dispatch(createUser(userInfo))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);