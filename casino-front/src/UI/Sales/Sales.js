import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/lists_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

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
                    title: 'Documento',
                    dataIndex: 'idenNumClient',
                    key: 'idenNumClient'
                },
                {
                    title: 'Valor',
                    dataIndex: 'cost',
                    key: 'cost',
                },
                {
                    title: 'Modo de pago',
                    dataIndex: 'paymentMethod',
                    key: 'paymentMethod',
                },
                {
                    title: 'Puntos otorgados',
                    dataIndex: 'points',
                    key: 'points',
                },
                {
                    title: 'Funcionario',
                    dataIndex: 'employee',
                    key: 'employee',
                }
            ]
        };
    }

    componentDidMount(){
        this.props.fetchSales();
    }

    render(){
        const { sales } = this.props;
        const { columns } = this.state;
        return(
            <div style={{padding: '20px'}}>
                <div className='list-style'>
                    <div className='background-crop'>
                        <img className='background' alt='background' src={casinoBackGround} />
                    </div>
                    <br/>
                        <h1>Reporte de ventas</h1>
                    <br/>
                    <Table dataSource={sales} columns={columns}/>
                </div>
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