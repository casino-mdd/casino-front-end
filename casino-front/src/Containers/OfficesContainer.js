import {connect} from 'react-redux';
import {toggleCreationModal} from '../Store/Actions/OfficeActions';
import Offices from '../UI/Office/Offices';

const mapStateToProps = (state) => {
    return {
      visibleModal: state.office.showCreateModal
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
            toggleModal: (flag) =>  dispatch(toggleCreationModal(flag))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(Offices);
