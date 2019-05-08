import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Divider, Icon, Row, Table, Select} from 'antd';
import EmployeeForm from './EmployeeForm'

class EmployeesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Nombre',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email',
                },
                {
                    title: 'Fecha ingreso',
                    dataIndex: 'admissionDate',
                    key: 'admissionDate',
                },
                {
                    title: 'Oficina',
                    dataIndex: 'office',
                    key: 'office',
                },
            ]
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchEmployees();
        this.props.fetchOffices();
    }

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        console.log('Employees', this.props);
        const { employees, visibleModal, offices, createEmployee } = this.props;
        const { columns } = this.state;

        return(
            <div style={{padding: '20px'}}>
                <Row>
                    <Col md={2} offset={21}>
                        <Button type='primary' onClick={() => this.toggleModal(true)}>
                            <Icon type='user-add'/>
                            Agregar empleado
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Table dataSource={employees} columns={columns}/>

                <EmployeeForm visible={visibleModal} onCancel={() => this.toggleModal(false)} offices={offices}
                    createEmployee={createEmployee}
                />
            </div>
        );
    }
}

EmployeesList.propTypes = {
    visibleModal: PropTypes.bool,
    employees: PropTypes.array,
    toggleModal: PropTypes.func,
    fetchEmployees: PropTypes.func,
    fetchOffices: PropTypes.func,
    offices: PropTypes.array
};

EmployeeForm.defaultProps = {
    visibleModal: false,
    employees: [],
    toggleModal: f => f,
    fetchEmployees: f => f,
    fetchOffices: f => f,
    offices: []
};

export default EmployeesList;