import request from './RequestWrapper';

// NEW
function createClient(clientInfo){
    return request({
        url: 'client/createdto',
        method: 'POST',
        data: clientInfo
    });
}
// LIST
function getClientList(){
    return request({
        url: 'client/listdto',
        method: 'GET'
    });
}
// FIND
function getClient(identification_number){
    return request({
        url: 'client/find',
        param: identification_number,
        method: 'GET'
    });
}
//EDIT
function updateClient(identification_number,clientInfo){
    return request({
        url: 'client/update',
        param: identification_number,
        method: 'PUT',
        data: clientInfo
    });
}

export default {
    createClient,
    getClientList,
    getClient,
    updateClient
};