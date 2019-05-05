import {ClientsReducerConstants as C} from '../Constants';

const initialState = {
    showCreationModal: false,
};

export default function clientReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_CLIENT_MODAL:
            return {
                ...state,
                showCreationModal: action.flag
            };

        default:
            return state;
    }
}