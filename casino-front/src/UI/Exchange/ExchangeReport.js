import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';
import '../styles/lists_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';

class ExchangeReport extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns:[
                {
                    title: 'Cliente',
                    dataIndex: 'client',
                    key: 'client'
                },
                {
                  title: 'Premio',
                  dataIndex: 'nameReward',
                  key: 'nameReward'
                },
                {
                    title: 'Fecha transacción',
                    dataIndex: 'date',
                    key: 'date'
                },
                {
                    title: 'Empleado encargado',
                    dataIndex: 'employee',
                    key: 'employee'
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
        return(
            <div style={{padding: '20px'}}>
                <div className='list-style'>
                    <div className='background-crop'>
                        <img className='background' alt='background' src={casinoBackGround} />
                    </div>
                    <br/>
                    <h1>Reporte de intercambios</h1>
                    <br/>
                <Table dataSource={exchanges} columns={columns}/>
            </div>
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