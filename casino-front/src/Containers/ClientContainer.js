import {connect} from 'react-redux';
import { toggleCreationModal} from "../Store/Actions/ClientActions";
import ClientsList from "../UI/Client/Clients";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.client.showCreationModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);