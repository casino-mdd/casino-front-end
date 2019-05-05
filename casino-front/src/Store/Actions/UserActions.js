import {UserReducerConstants as C} from '../Constants'
import UserServices from '../../Services/UserServices';

const toggleModal = (flag) => {
    return {
        type: C.TOGGLE_CREATE_USER_MODAL,
        flag
    };
};

export const toggleCreationModal = (flag) =>  {
    return dispatch => {
        dispatch(toggleModal(flag));
    };
};

export const signIn = (userInfo) => {
  UserServices.signIn(userInfo)
      .then(response => {
          console.log('success!', response);
      })
      .catch(err => {

      });
};