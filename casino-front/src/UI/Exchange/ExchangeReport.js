import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';
import {Typography} from 'antd/lib/index';

class ExchangeReport extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns:[
                {
                    title: 'Client',
                    dataIndex: 'client',
                    key: 'client'
                },

                {
                    title: 'Empleado encargado',
                    dataIndex: 'employee',
                    key: 'employee'
                },
                {
                    title: 'Fecha transacción',
                    dataIndex: 'date',
                    key: 'date'
                }
            ]
        };
    }


    componentDidMount(){
        this.props.fetchExchanges();
    }

    render(){
        const {exchangeReport} = this.props;
        const {exchanges} = this.props;
        console.log('exchanges', exchanges);
        const {columns} = this.state;
        const { Title } = Typography;
        return(
            <div style={{padding: '20px'}}>
                <br/>
                <Title>Reporte de intercambios</Title>
                <br/>
                <Table dataSource={exchanges} columns={columns}/>
            </div>
        );
    }
}

ExchangeReport.propTypes = {
    exchangeReport: PropTypes.array
};

ExchangeReport.defaultProps = {
    exchangeReport: [
        {
            client: 'Pepe perez',
            reward: 'Carro BMW',
            employee: 'Juan Rodriguez',
            date: new Date().toLocaleDateString()
        }
    ]
};

export default ExchangeReport;