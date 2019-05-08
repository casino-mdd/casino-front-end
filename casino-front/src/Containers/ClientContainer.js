import {connect} from 'react-redux';
import {toggleCreationModal, fetchClients, createClient} from "../Store/Actions/ClientActions";
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
        fetchClients: () => dispatch(fetchClients()),
        createClient: (clientInfo) => dispatch(createClient(clientInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);