import request from './RequestWrapper';

function signIn( userInfo ){
    return request({
        url: 'userAccount/login',
        method: 'POST',
        data: userInfo
    });
}

function createUser( userInfo ){
    return request({
        url: '',
        method: 'POST',
        data: userInfo
    });
}

export default {
    signIn, createUser
};