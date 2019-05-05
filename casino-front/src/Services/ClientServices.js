import request from './RequestWrapper';

function getClientsList(){
    return request({
        url: '',
        method: 'GET',
    });
}

export default {
    getClientsList
};