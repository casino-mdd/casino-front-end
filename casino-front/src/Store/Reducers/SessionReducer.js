import {SessionReducerConstants as C} from '../Constants'

const initialState = {
    username: undefined,
    role: undefined,
    userId: undefined,
    userIdentification: undefined,
    isSigned: false
};

export default function sessionReducer(state = initialState, action){
    switch (action.type) {
        case C.SET_SESSION_INFO:
            return{
                ...state,
                username: action.username,
                role: action.role,
                userId: action.userId,
                userIdentification: action.userIdentification,
                isSigned: action.isSigned
            };

        default:
            return state;
    }
}