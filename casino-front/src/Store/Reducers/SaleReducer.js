import {SalesReducerConstants as C} from '../Constants';

const initialState = {
    sales: []
};

export default function saleReducer(state = initialState, action){
    switch (action.type) {
        case C.SET_SALES_LIST:
            return {
                ...state,
                sales: action.sales
            };

        default:
            return state;
    }
}