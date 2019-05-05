import {ClientsReducerConstants as C} from '../Constants';

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

export const setClientsList = (clients) => {
  return dispatch => {
      dispatch(setClients(clients));
  }
};


export const fetchClients = () => {
};
