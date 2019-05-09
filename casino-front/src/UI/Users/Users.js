import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Row, Col, Button, Divider, Icon} from 'antd';
import UserForm from "./UsersForm";
import '../styles/lists_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

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
                    title: 'Permisos',
                    dataIndex: 'profile',
                    key: 'profile'
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

    componentDidMount(){
    this.props.fetchUsers();
    }

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        const {users, visibleModal} = this.props;
        const {columns} = this.state;

        return(
            <div style={{padding: '20px'}}>
                <div className='list-style'>
                    <div className='background-crop'>
                        <img className='background' alt='background' src={casinoBackGround} />
                    </div>
                    <Row>
                        <Col md={2} offset={20}>
                            <Button type='primary' onClick={() => this.toggleModal(true)}>
                                <Icon type='user-add' />
                                Agregar usuario
                            </Button>
                        </Col>
                    </Row>
                    <Divider />
                    <Table dataSource={users} columns={columns}/>
                    <UserForm visible={visibleModal} onCancel={() => this.toggleModal(false)}/>
                </div>
            </div>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.array,
  //  toggleModal: PropTypes.func,
   // visibleModal: PropTypes.bool
};
/*
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
*/
export default UsersList;