import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Divider, Icon, Row, Table} from 'antd';
import EmployeeForm from './EmployeeForm'
import '../styles/lists_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

class EmployeesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Nombre',
                    dataIndex: 'employeeName',
                    key: 'employeeName',
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

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        console.log('Employees', this.props);
        const { employees, visibleModal } = this.props;
        const { columns } = this.state;

        return(
            <div style={{padding: '20px'}}>
                <div className='list-style'>
                    <div className='background-crop'>
                        <img className='background' alt='background' src={casinoBackGround} />
                    </div>
                    <Row>
                        <Col md={2} offset={21}>
                            <Button type='primary' onClick={() => this.toggleModal(true)}>
                                <Icon type='user-add'/>
                                Agregar funcionario
                            </Button>
                        </Col>
                    </Row>
                    <Divider />
                    <Table dataSource={employees} columns={columns}/>
                    <EmployeeForm visible={visibleModal} onCancel={() => this.toggleModal(false)}/>
                </div>
            </div>

    );
    }
}

EmployeesList.propTypes = {
    employees: PropTypes.array,
    visibleModal: PropTypes.bool
};

EmployeesList.defaultProps = {
    employees: [
        {
            employeeName: 'Pepe Perez',
            email: 'pepePerez@email.com',
            admissionDate: new Date().toLocaleDateString(),
            office: 'Chico Norte'
        }
    ],
    visibleModal: false
};

export default EmployeesList;