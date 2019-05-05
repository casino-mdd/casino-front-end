import {EmployeesReducerConstants as C} from '../Constants';
const initialState = {
    showCreationModal: false,
    employees: []
};
export default function EmployeeReducer(state = initialState, action){
    switch (action.type) {
        case C.TOGGLE_CREATE_EMPLOYEE_MODAL:
            return {
                ...state,
                showCreationModal: action.flag
            };

        case C.SET_EMPLOYEES_LIST:
            return {
                ...state,
                employees: action.employees
            };

        default:
            return state;
    }
}