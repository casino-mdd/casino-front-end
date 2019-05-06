import request from './RequestWrapper';

// NEW
function createOffice(officeInfo){
    return request({
        url: 'office/create',
        method: 'POST',
        data: officeInfo
    });
}
// LIST
function getOfficeList(){
    return request({
        url: 'office/list',
        method: 'GET'
    });
}

export default {
    createOffice,
    getOfficeList
};