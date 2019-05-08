import {SalesReducerConstants as C} from '../Constants';
import SaleServices from '../../Services/SaleServices';
import {WarningMsg} from '../../UI/GeneralComponents/Messages';

const setSales = (sales) => {
    return {
        type: C.SET_SALES_LIST,
        sales
    };
};

export const fetchSales = () => {
    return dispatch => {
        SaleServices.getSalesList()
            .then(response => {
                dispatch(setSales(response.data));
            })
            .catch(err => {
                WarningMsg('Problema consultando las ventas');
            });
    };
};