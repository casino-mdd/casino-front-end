import {SessionReducerConstants as C} from '../Constants'

const initialState = {
    username: undefined,
    role: undefined,
    userId: undefined,
};

export function sessionReducer(state = initialState, action){
    switch (action.type) {
        case C.SET_SESSION_INFO:
            return{
                ...state,
                username: action.username,
                role: action.role,
                userId: action.userId
            };

        default:
            return state;
    }
}