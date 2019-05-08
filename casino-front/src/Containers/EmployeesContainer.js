import {connect} from 'react-redux';
import EmployeesList from "../UI/Employee/Employees";
import {toggleCreationModal, fetchEmployees, fetchOffices, createEmployee} from "../Store/Actions/EmployeeActions";

const mapStateToProps = (state) => {
    return {
        visibleModal: state.employee.showCreationModal,
        employees: state.employee.employees,
        offices: state.employee.offices
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (flag) => dispatch(toggleCreationModal(flag)),
        fetchEmployees: () => dispatch(fetchEmployees()),
        fetchOffices: () => dispatch(fetchOffices()),
        createEmployee: (employeeInfo) => dispatch(createEmployee(employeeInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);