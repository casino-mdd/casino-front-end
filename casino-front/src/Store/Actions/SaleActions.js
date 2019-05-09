import {SalesReducerConstants as C} from '../Constants';
import SaleServices from '../../Services/SaleServices';
import {ErrorMsg, SuccessMsg, WarningMsg} from '../../UI/GeneralComponents/Messages';

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

export const regSale = (saleInfo) => {
    return dispatch => {
        SaleServices.registerSale(saleInfo)
            .then(response => {
                const data = response.data;
                if(data.error)
                {
                    ErrorMsg(data.error);
                }
                else
                {
                    SuccessMsg('Venta registrada');
                }
            })
            .catch(err => {
                ErrorMsg('Problema registrando venta');
            });
    };
};