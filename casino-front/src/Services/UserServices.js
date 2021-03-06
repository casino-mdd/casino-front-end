import request from './RequestWrapper';

//NEW
function createUser( userInfo ){
    return request({
        url: 'userAccount/create',
        method: 'POST',
        data: userInfo
    });
}
// LIST
function getUserList(){
    return request({
        url: 'userAccount/list',
        method: 'GET'
    });
}
//LOGIN
function signIn( userInfo ){
    return request({
        url: 'userAccount/login',
        method: 'POST',
        data: userInfo
    });
}


export default {
    createUser,
    getUserList,
    signIn
};