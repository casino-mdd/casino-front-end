import {ExchangesReducerConstants as C} from '../Constants';
import ExchangeServices from '../../Services/ExchangeServices';
import {SuccessMsg, ErrorMsg} from '../../UI/GeneralComponents/Messages';

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
                const data = response.data;
                if(data.points.length ==0)
                {
                    ErrorMsg("Sin puntos disponibles");
                }
                    else
                {
                    dispatch(setClientInfo(response.data));
                }

            })
            .catch(err => {
                ErrorMsg('Cliente invalido');
                setClientInfo(null);
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
                const data = response.data;
                if(data.error)
                {
                    ErrorMsg(data.error);
                }
                else {
                    SuccessMsg('Intercambio realizado con éxito');
                }

            })
            .catch(err => {
                ErrorMsg('Problema registrando intercambio');
            });
    };
};