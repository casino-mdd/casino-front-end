import {connect} from 'react-redux';
import EmployeesList from "../UI/Employee/Employees";
import {toggleCreationModal} from "../Store/Actions/EmployeeActions";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.employee.showCreationModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);