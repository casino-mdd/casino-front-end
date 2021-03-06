import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Divider, Row, Col, Button, Icon} from 'antd'
import ClientForm from "./ClientForm";
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