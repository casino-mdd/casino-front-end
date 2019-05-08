import {connect} from 'react-redux';
import {toggleCreationModal, fetchOffices, createOffice} from '../Store/Actions/OfficeActions';
import Offices from '../UI/Office/Offices';

const mapStateToProps = (state) => {
    return {
      visibleModal: state.office.showCreateModal,
      offices: state.office.offices
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
            toggleModal: (flag) =>  dispatch(toggleCreationModal(flag)),
            fetchOffices: () => dispatch(fetchOffices()),
            createOffice: (officeInfo) => dispatch(createOffice(officeInfo))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(Offices);
