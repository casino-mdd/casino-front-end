import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {List, Avatar, Card, Table, Row, Col, Button, Icon, Divider} from 'antd';
import OfficeForm from "./OfficeForm";
import '../styles/lists_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

const offices = [
    {
        id_office: 1,
        address: 'Calle falsa 123',
        city:'Bogota',
        name: 'Sucursal 1',
        employess: 123,
    },
    {
        id_office: 2,
        address: 'Calle falsa 123',
        city:'Bogota',
        name: 'Sucursal 1',
        employess: 123,
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
        title: '# Funcionarios',
        dataIndex: 'employees',
        key: 'employees',
    },
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
                <div className='list-style'>
                    <div className='background-crop'>
                        <img className='background' alt='background' src={casinoBackGround} />
                   </div>
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
                    <OfficeForm visible={visibleModal} onCancel={() => this.toggleModal(false)}/>
                </div>
            </div>
        );
    }
}

export default OfficesList;