import {ClientsReducerConstants as C} from '../Constants';
import ClientServices from '../../Services/ClientServices';
import {WarningMsg} from '../../UI/GeneralComponents/Messages';

const toggleModal = (flag) => {
    return {
        type: C.TOGGLE_CREATE_CLIENT_MODAL,
        flag
    };
};

const setClients = (clients) => {
    return {
        type: C.SET_CLIENTS_LIST,
        clients
    }
};

export const toggleCreationModal = (flag) => {
    return dispatch => {
        dispatch(toggleModal(flag));
    };
};

export const fetchClients = () => {
    return dispatch => {
        ClientServices.getClientList()
            .then(response => {
                dispatch(setClients(response.data));
            })
            .catch(err => {

            });
    };
};


export const createClient = (clientInfo) => {
    return dispatch => {
        ClientServices.createClient(clientInfo)
            .then(response => {
                dispatch(toggleModal(false));
                dispatch(fetchClients());
            })
            .catch(err => {
                WarningMsg('Error creando cliente');
            });
    };
};