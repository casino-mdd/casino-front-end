import {EmployeesReducerConstants as C} from '../Constants';
import EmployeeServices from '../../Services/EmployeeServices';
import OfficeServices from "../../Services/OfficeServices";

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

const setOfficesList = (offices) => {
    return {
        type: C.SET_OFFICES_EMPLOYEES_LIST,
        offices
    };
};

export const toggleCreationModal = (flag) => {
    return dispatch => {
        dispatch(toggleModal(flag))
    };
};

export const fetchEmployees = () => {
    return dispatch => {
        EmployeeServices.getEmployeeList()
            .then(response => {
                dispatch(setEmployeesList(response.data))
            })
            .catch(err => {

            });
    };
};

export const fetchOffices = () => {
    return dispatch => {
        OfficeServices.getOfficeList()
            .then(response => {
                dispatch(setOfficesList(response.data));
                dispatch(fetchEmployees())
            })
            .catch(err => {

            });
    };
};

export const createEmployee = (employeeInfo) => {
    return dispatch => {
        EmployeeServices.createEmployee(employeeInfo)
            .then(response => {
                dispatch(toggleModal(false))
            })
            .catch(err => {
                dispatch(toggleModal(false))
            });
    };
};