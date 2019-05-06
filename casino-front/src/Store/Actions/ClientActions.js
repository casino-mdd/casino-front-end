import {ClientsReducerConstants as C} from '../Constants';
import ClientServices from '../../Services/ClientServices';

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
