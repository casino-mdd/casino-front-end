import request from './RequestWrapper';

function createReward(rewardInfo){
    return request({
        url: 'reward/createdto',
        method: 'POST',
        data: rewardInfo
    });
}

function getRewardsList(){
    return request({
        url: 'office/listdto',
        method: 'GET'
    })
}

export default {
    createReward,
    getRewardsList
};