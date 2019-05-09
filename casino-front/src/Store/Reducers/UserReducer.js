import {UserReducerConstants as C} from "../Constants";

const initialState = {
    showCreationModal: false,
    users: [],
    offices: []
};

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_USER_MODAL:
            return {
                ...state,
                showCreationModal: action.flag
            };

        case C.SET_USERS_LIST:
            return {
                ...state,
                users: action.users
            };

        case C.SET_OFFICES_USERS_LIST:
            return {
                ...state,
                offices: action.offices
            };
        default:
            return state;
    }
}