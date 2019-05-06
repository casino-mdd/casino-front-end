import {EmployeesReducerConstants as C} from '../Constants';
import EmployeeServices from '../../Services/EmployeeServices';

const toggleModal = (flag) => {
    return {
        type: C.TOGGLE_CREATE_EMPLOYEE_MODAL,
        flag
    }
};

const setEmployeesList = (employees) => {
    return {
        type: C.SET_EMPLOYEES_LIST,
        employees
    };
};

export const toggleCreationModal = (flag) => {
    return dispatch => {
        dispatch(toggleModal(flag))
    };
};

export const fetchEmployees = () => {
    return dispatch => {
        EmployeeServices.getEmployees()
            .then(response => {
                dispatch(setEmployeesList(response.data))
            })
            .catch(err => {

            });
    };
};