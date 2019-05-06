import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Divider, Row, Col, Button, Icon} from 'antd'
import ClientForm from "./ClientForm";
import '../styles/common_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

class ClientsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name'
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
            ]
        };
        this.toggleModal = this.toggleModal.bind(this);
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
                            <Button  type='primary' onClick={() => this.toggleModal(true)}>
                                <Icon type='user-add'/>
                                Agregar cliente
                            </Button>
                        </Col>
                    </Row>

                    <Divider />
                    <Table  dataSource={clients} columns={columns}/>
                    <ClientForm visible={visibleModal} onCancel={() => this.toggleModal(false)}/>
                </div>
            </div>
        );
    }
}

ClientsList.propTypes = {
    clients: PropTypes.array
};

ClientsList.defaultProps = {
    clients: [
        {
            name: 'Alvaro Rodriguez',
            age: 24,
            email: 'aldrodriguezca@unal.edu.co',
            phone: '312312312'
        }
    ]
};

export default ClientsList;