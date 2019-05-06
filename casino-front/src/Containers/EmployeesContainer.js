import {connect} from 'react-redux';
import EmployeesList from "../UI/Employee/Employees";
import {toggleCreationModal, fetchEmployees} from "../Store/Actions/EmployeeActions";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.employee.showCreationModal,
        employees: state.employee.employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag)),
        fetchEmployees: () => dispatch(fetchEmployees())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);