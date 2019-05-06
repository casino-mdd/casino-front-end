import request from './RequestWrapper';

function getOffices(){
    return request({
        url: 'office/list',
        method: 'GET'
    });
}

export default {
    getOffices
};