import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Table} from 'antd'

class SalesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Cliente',
                    dataIndex: 'client',
                    key: 'client',
                },
                {
                    title: 'Valor',
                    dataIndex: 'cost',
                    key: 'cost',
                },
                {
                    title: 'Modo de pago',
                    dataIndex: 'payment_method',
                    key: 'paymentMethod',
                },
                {
                    title: 'Puntos otorgados',
                    dataIndex: 'points',
                    key: 'points',
                },
                {
                    title: 'Empleado',
                    dataIndex: 'employee',
                    key: 'employee',
                }
            ]
        };
    }
    render(){
        const { sales } = this.props;
        const { columns } = this.state;
        return(
            <div style={{padding: '20px'}}>
                <Table dataSource={sales} columns={columns}/>
            </div>
        );
    }
}

SalesList.propTypes = {
    sales: PropTypes.array
};

SalesList.defaultProps  = {
    sales: [
        {
            client: 'Pepe Perez',
            cost: 34343434,
            paymentMethod: 'Efectivo',
            points: 50,
            employee: 'Pedro Ramirez'
        }
    ]
};

export default SalesList;