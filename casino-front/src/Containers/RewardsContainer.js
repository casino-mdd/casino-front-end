import {connect} from 'react-redux'
import RewardsList from "../UI/Office/Rewards/Rewards";
import {fetchRewards} from '../Store/Actions/RewardActions'

const mapStateToProps = (state) => {
    return {
        rewards: state.reward.rewards
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRewards: () => dispatch(fetchRewards())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsList);