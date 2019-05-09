import {RewardReducerConstants as C} from '../Constants';
import RewardServices from '../../Services/RewardServices';
import {SuccessMsg, WarningMsg} from '../../UI/GeneralComponents/Messages';

const setRewardsList = (rewards) => {


    return {
        type: C.SET_REWARDS_LIST,
        rewards
    };
};

export const fetchRewards = () => {
    return dispatch => {
        RewardServices.getRewardsList()
            .then(response => {


                dispatch(setRewardsList(response.data));
            })
            .catch(err => {
                WarningMsg('Problema consultando los premios');
            });
    };
};

export const createReward = (rewardInfo) => {
    return dispatch => {
        RewardServices.createReward(rewardInfo)
            .then(response => {
                SuccessMsg('Premio creado exitosamente');
                dispatch(fetchRewards());
            })
            .catch(err => {
                WarningMsg('Error creando el premio');
            });
    };
}