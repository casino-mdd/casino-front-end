import {connect} from 'react-redux';
import {toggleCreationModal, fetchClients} from "../Store/Actions/ClientActions";
import ClientsList from "../UI/Client/Clients";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.client.showCreationModal,
        clients: state.client.clients
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag)),
        fetchClients: () => dispatch(fetchClients())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);