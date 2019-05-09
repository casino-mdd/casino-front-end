import request from './RequestWrapper';

//NEW
function createUser( userInfo ){
    return request({
        url: 'userAccount/createdto',
        method: 'POST',
        data: userInfo
    });
}
// LIST
function getUserList(){
    return request({
        url: 'userAccount/listdto',
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