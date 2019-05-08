import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Divider, Row, Col, Button, Icon} from 'antd'
import ClientForm from "./ClientForm";
import '../styles/lists_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

class ClientsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Nombre',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Cédula',
                    dataIndex: 'identificationNumber',
                    key: 'identificationNumber'
                },
                {
                    title: 'Edad',
                    dataIndex: 'age',
                    key: 'age'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                },
                {
                    title: 'Teléfono',
                    dataIndex: 'phone',
                    key: 'phone'
                },
                {
                    title: 'Fecha de registro',
                    dataIndex: 'createdDate',
                    key: 'createdDate'
                },
            ]
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchClients();
    }

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        const {clients, visibleModal} = this.props;
        const {columns} = this.state;
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
                            Agregar cliente
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Table dataSource={clients} columns={columns}/>
                <ClientForm visible={visibleModal} onCancel={() => this.toggleModal(false)} createClient={this.props.createClient}/>
                </div>
            </div>
        );
    }
}

ClientsList.propTypes = {
    clients: PropTypes.array,
    fetchClients: PropTypes.func,
    visibleModal: PropTypes.bool
};

ClientsList.defaultProps = {
    clients: [],
    fetchClients : f => f,
    visibleModal: false
};

export default ClientsList;