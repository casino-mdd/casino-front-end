import {EmployeesReducerConstants as C} from '../Constants';
const initialState = {
    showCreationModal: false
};
export default function EmployeeReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_EMPLOYEE_MODAL:
            return {
                ...state,
                showCreationModal: action.flag
            };

        default:
            return state;
    }
}