import {RewardReducerConstants as C} from '../Constants';

const initialState = {
    rewards: []
};

export function rewardReducer(state = initialState, action){
    switch (action.type) {
        case C.SET_REWARDS_LIST:
            return{
                ...state,
                rewards: action.rewards
            };

        default:
            return state;
    }
}