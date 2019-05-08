import {ExchangesReducerConstants as C} from '../Constants';
import ExchangeServices from '../../Services/ExchangeServices';
import {WarningMsg, SuccessMsg} from '../../UI/GeneralComponents/Messages';

const setClientInfo = (clientInfo) => {
    return {
        type: C.SET_CLIENT_INFO,
        clientInfo
    };
};

const setExchanges = (exchanges) => {
    return {
        type: C.SET_EXCHANGES_LIST,
        exchanges
    };
};

export const getClientPoints = (clientId, userId) => {
    return dispatch => {
        ExchangeServices.queryPointsByClient(clientId, userId)
            .then(response => {
                dispatch(setClientInfo(response.data));
            })
            .catch(err => {
                WarningMsg(err.data);
            });
    };
};


export const fetchExchanges = () => {
    return dispatch => {
        ExchangeServices.fetchExchanges()
            .then(response => {
                dispatch(setExchanges(response.data))
            })
            .catch(err => {

            });
    };

};

export const performExchange = (exchangeInfo) => {
    return dispatch => {
        ExchangeServices.performExchange(exchangeInfo)
            .then(response => {
                console.log('seceeees', response.data);
                SuccessMsg('Intercambio realizado con éxito');

            })
            .catch(err => {

            });
    };
};