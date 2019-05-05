import {ClientsReducerConstants as C} from '../Constants';

const initialState = {
    showCreationModal: false,
    clients: []
};

export default function clientReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_CLIENT_MODAL:
            return {
                ...state,
                showCreationModal: action.flag
            };

        case C.SET_CLIENTS_LIST:
            return {
                ...state,
                clients: action.clients
            };

        default:
            return state;
    }
}