import {ExchangesReducerConstants as C} from '../Constants';

const initialState = {
    exchanges: [],
    clientInfo: undefined
};

export default function exchangeReducer(state = initialState, action){
    switch (action.type) {
        case C.SET_EXCHANGES_LIST:
            return{
                ...state,
                exchanges: action.exchanges
            };
        case C.SET_CLIENT_INFO:
            return {
                ...state,
                clientInfo: action.clientInfo
            };
        default:
            return state;
    }
}