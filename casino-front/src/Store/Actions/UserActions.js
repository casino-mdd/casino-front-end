import {UserReducerConstants as C, SessionReducerConstants as SessionC} from '../Constants'
import UserServices from '../../Services/UserServices';
import {SuccessMsg, WarningMsg} from '../../UI/GeneralComponents/Messages';

const toggleModal = (flag) => {
    return {
        type: C.TOGGLE_CREATE_USER_MODAL,
        flag
    };
};

const setUsers = (users) => {
    return {
        type: C.SET_USERS_LIST,
        users
    };
};

const setUserInfo = (sessionInfo) => {
    return {
        type: SessionC.SET_SESSION_INFO,
        username: sessionInfo.username,
        role: sessionInfo.role,
        userId: sessionInfo.userId,
        userIdentification: sessionInfo.userIdentification,
        isSigned: sessionInfo.isSigned
    };
};

export const toggleCreationModal = (flag) =>  {
    return dispatch => {
        dispatch(toggleModal(flag));
    };
};

export const fetchUsers = () => {
    return dispatch => {
        UserServices.getUserList()
            .then(response => {
                dispatch(setUsers(response.data));
            })
            .catch(error => {

            })
    };
};

export const signIn = (userInfo) => {
    return dispatch => {
    UserServices.signIn(userInfo)
        .then(response => {
            const data = response.data;
            console.log('success!', response);
            const sessionData = {
                username: data.username,
                role: data.idEmployee.position,
                userId: data.idUserAccount,
                userIdentification: data.idEmployee.idPerson.identificationNumber,
                isSigned: true
            };

            localStorage.setItem('username', data.username);
            localStorage.setItem('role', data.idEmployee.position);
            localStorage.setItem('userId', data.idUserAccount);
            localStorage.setItem('userIdentification', data.idEmployee.idPerson.identificationNumber);

            dispatch(setUserInfo(sessionData));
        })
        .catch(err => {

        });
    };
};

export const isSignedIn = () => {
    return localStorage.username != undefined && localStorage.username != ''
        && localStorage.role != undefined && localStorage.role != ''
        && localStorage.userId != undefined && localStorage.userId != ''
        && localStorage.userIdentification != undefined && localStorage.userIdentification != '';
};

export const signOut = () => {
    return dispatch => {
        const sessionData = {
            username: undefined,
            role: undefined,
            userId: undefined,
            userIdentification: undefined,
            isSigned: false
        };

        localStorage.setItem('username', undefined);
        localStorage.setItem('role', undefined);
        localStorage.setItem('userId', undefined);
        localStorage.setItem('userIdentification', undefined);

        dispatch(setUserInfo(sessionData));
        //localStorage.clear();
    };
};

export const createUser = (userInfo) => {
    return dispatch => {
        UserServices.createUser(userInfo)
            .then(response => {
                SuccessMsg('usuario creado exitosamente');
                dispatch(fetchUsers());
                dispatch(toggleModal(false))
            })
            .catch(error => {
                WarningMsg('Problema creando usuario');
            });
    };
};