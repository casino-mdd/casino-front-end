import {OfficeReducerConstants as C} from '../Constants';

const initialState = {
    showCreateModal: false,
    offices: []
};

export default function officeReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_OFFICE_MODAL:
            return {
                ...state,
                showCreateModal: action.flag
        };

        case C.SET_OFFICES_LIST:
            return {
                ...state,
                offices: action.offices
            };
        default:
            return state;
    }
}