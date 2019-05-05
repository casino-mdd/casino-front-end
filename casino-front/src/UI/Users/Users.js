import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Row, Col, Button, Divider, Icon} from 'antd';
import UserForm from "./UsersForm";

class UsersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Nombre usuario',
                    dataIndex: 'username',
                    key: 'username'
                },
                {
                    title: 'Estado',
                    dataIndex: 'status',
                    key: 'status'
                },
                {
                    title: 'Fecha de creación',
                    dataIndex: 'createdDate',
                    key: 'createdDate'
                }
            ]
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        const {users, visibleModal} = this.props;
        const {columns} = this.state;

        return(
            <div style={{padding: '20px'}}>
                <Row>
                    <Col md={2} offset={20}>
                        <Button type='primary' onClick={() => this.toggleModal(true)}>
                            <Icon type='user-add' />
                            Agregar usuario
                        </Button>
                    </Col>
                </Row>
                <Table dataSource={users} columns={columns}/>
                <UserForm visible={visibleModal} onCancel={() => this.toggleModal(false)}/>
            </div>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.array,
    toggleModal: PropTypes.func,
    visibleModal: PropTypes.bool
};

UsersList.defaultProps = {
    users: [
        {
            username: 'aldrodriguezca',
            status: 'Activo',
            createdDate: new Date().toLocaleDateString()
        }
    ],
    toggleModal: f => f,
    visibleModal: false
};

export default UsersList;