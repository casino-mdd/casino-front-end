import {OfficeReducerConstants as C} from '../Constants';
import OfficeServices from '../../Services/OfficeServices';
import {SuccessMsg, WarningMsg} from '../../UI/GeneralComponents/Messages';

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
        OfficeServices.getOfficeList()
            .then(response => {
                dispatch(setOffices(response.data));
            })
            .catch(err => {

            });
    };
};

export const createOffice = (officeInfo) => {
    return dispatch => {
        OfficeServices.createOffice(officeInfo)
            .then(response => {
                SuccessMsg('Oficina creada exitosamente');
                dispatch((toggleModal(false)));
                dispatch(fetchOffices());
            })
            .catch(err => {
                WarningMsg('Error creando oficina');
            });
    };
};