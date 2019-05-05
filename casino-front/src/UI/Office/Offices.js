import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {List, Avatar, Card, Table, Row, Col, Button, Icon, Divider} from 'antd';
import OfficeForm from "./OfficeForm";

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
    constructor(props) {
        super(props);
        this.state={
            visible: true
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        console.log('Oficinas', this.props);
        const { visibleModal } = this.props;

        return(

            <div style={{padding: '20px'}}>
                <Row>
                    <Col md={2} offset={21}>
                        <Button type='primary' onClick={()=> this.toggleModal(true)}>
                            <Icon type='plus-circle'/>
                            Agregar oficina
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Table columns={office_columns} dataSource={offices}/>
                <Divider />
                <OfficeForm visible={visibleModal} onCancel={() => this.toggleModal(false)}/>
            </div>
        );
    }
}

export default OfficesList;