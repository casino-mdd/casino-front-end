import {UserReducerConstants as C} from "../Constants";

const initialState = {
    showCreationModal: false
};

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_USER_MODAL:
            return {
                ...state,
                showCreationModal: action.flag
            };

        default:
            return state;
    }
}