import {connect} from 'react-redux';
import {toggleCreationModal, fetchUsers, createUser} from "../Store/Actions/UserActions";
import {fetchOffices} from "../Store/Actions/OfficeActions";
import UsersList from "../UI/Users/Users";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.user.showCreationModal,
        users: state.user.users,
        office: state.office.offices
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag)),
        fetchUsers: () => dispatch(fetchUsers()),
        createUser: (userInfo) => dispatch(createUser(userInfo)),
        fetchOffices: () =>  dispatch()
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);