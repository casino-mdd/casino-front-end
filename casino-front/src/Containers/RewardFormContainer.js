import {connect} from 'react-redux'
import RewardForm from "../UI/Office/Rewards/RewardForm";
import {createReward} from '../Store/Actions/RewardActions';

const mapStateToProps = (state) => {
    return {
        userInfo: state.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        createReward: (rewardInfo) => dispatch(createReward(rewardInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardForm);