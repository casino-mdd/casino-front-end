import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd'
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
    }

    render(){
        const {clients} = this.props;
        const {columns} = this.state;
        return(
            <div style={{padding: '20px'}}>
                <Table dataSource={clients} columns={columns}/>
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