import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

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
    }

    render(){
        const { employees } = this.props;
        const { columns } = this.state;

        return(
            <div style={{padding: '20px'}}>
                <Table dataSource={employees} columns={columns}/>
            </div>
        );
    }
}

EmployeesList.propTypes = {
    employees: PropTypes.array
};

EmployeesList.defaultProps = {
    employees: [
        {
            employeeName: 'Pepe Perez',
            email: 'pepePerez@email.com',
            admissionDate: new Date().toLocaleDateString(),
            office: 'Chico Norte'
        }
    ]
};

export default EmployeesList;