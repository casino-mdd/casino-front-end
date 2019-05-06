import request from './RequestWrapper';

// NEW
function createEmployee(employeeInfo){
    return request({
        url: 'employee/create',
        method: 'POST',
        data: employeeInfo
    });
}
// LIST
function getEmployeeList(){
    return request({
        url: 'employee/list',
        method: 'GET'
    });
}
// FIND
function getEmployee(identification_number){
    return request({
        url: 'employee/find',
        param: identification_number,
        method: 'GET'
    });
}
//EDIT
function updateEmployee(identification_number,employeeInfo){
    return request({
        url: 'employee/update',
        param: identification_number,
        method: 'PUT',
        data: employeeInfo
    });
}

export default {
    createEmployee,
    getEmployeeList,
    getEmployee,
    updateEmployee
};