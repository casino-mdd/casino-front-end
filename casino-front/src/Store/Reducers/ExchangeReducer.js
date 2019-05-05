import {ExchangesReducerConstants as C} from '../Constants';

const initialState = {
    exchanges: []
};

export function exchangeReducer(state = initialState, action){
    switch (action.type) {
        case C.SET_EXCHANGES_LIST:
            return{
                ...state,
                exchanges: action.exchanges
            };

        default:
            return state;
    }
}