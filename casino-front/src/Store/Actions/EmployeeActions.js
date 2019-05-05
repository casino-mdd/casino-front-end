import {EmployeesReducerConstants as C} from '../Constants';
const toggleModal = (flag) => {
    return {
        type: C.TOGGLE_CREATE_EMPLOYEE_MODAL,
        flag
    }
};

export const toggleCreationModal = (flag) => {
    return dispatch => {
        dispatch(toggleModal(flag))
    };
};