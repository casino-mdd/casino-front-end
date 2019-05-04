import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {List, Avatar, Card, Table, Row, Col} from 'antd';

const offices = [
    {
        id_office: 1,
        address: 'Calle falsa 123',
        city:'Bogota',
        name: 'Sucursal 1',
        phone: '123123',
        employess: 123,
        machines: 123
    },
    {
        id_office: 2,
        address: 'Calle falsa 123',
        city:'Bogota',
        name: 'Sucursal 1',
        phone: '123123',
        employess: 123,
        machines: 123
    }
];

const office_columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Ciudad',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '# Empleados',
        dataIndex: 'employees',
        key: 'employees',
    },
    {
        title: '# Máquinas',
        dataIndex: 'machines',
        key: 'machines',
    }
];

class OfficesList extends Component{
    render(){
        console.log('Oficinas');
        return(
            <div style={{padding: '15px'}}>
                <h1>Lista de oficinas</h1>
                <Table columns={office_columns} dataSource={offices}/>
            </div>
        );
    }
}

export default OfficesList;