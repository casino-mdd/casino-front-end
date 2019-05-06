import {OfficeReducerConstants as C} from '../Constants';
import OfficeServices from '../../Services/OfficeServices';

const toggleModal = (flag) =>{
    return {
        type: C.TOGGLE_CREATE_OFFICE_MODAL,
        flag
    };
};

const setOffices = (offices) => {
    return {
        type: C.SET_OFFICES_LIST,
        offices
    }
};

export const toggleCreationModal = (flag) => {
  return dispatch => {
      dispatch(toggleModal(flag));
  };
};


export const fetchOffices = () => {
    return dispatch => {
        OfficeServices.getOffices()
            .then(response => {
                dispatch(setOffices(response.data));
            })
            .catch(err => {

            });
    };
};