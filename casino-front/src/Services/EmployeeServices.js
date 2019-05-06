import request from './RequestWrapper';

function getEmployees(){
    return request({
        url: 'employee/list',
        method: 'GET'
    });
}

function createEmployee(employeeInfo){
    return request({
        url: 'employee/create',
        method: 'POST',
        data: employeeInfo
    });
}

export default {
    getEmployees
};