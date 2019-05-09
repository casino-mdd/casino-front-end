import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Collapse, Card} from 'antd'
import {Table} from 'antd'
import '../../styles/lists_bg.css'
import casinoBackGround from '../../../assets/img/casinoBG.jpg';

const Panel = Collapse.Panel;


class RewardsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Premio',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Puntos requeridos',
                    dataIndex: 'pointsNeed',
                    key: 'pointsNeeded'
                },
                {
                    title: 'Disponible',
                    dataIndex: 'isAvailable',
                    key: 'isAvailable'
                }
            ]
        };
    }

    componentDidMount(){
        this.props.fetchRewards();
    }

    render(){
        const { columns } = this.state;
        const { rewards } = this.props;

        return(
            <div style={{padding: '20px'}}>
                <div className='list-style'>
                    <div className='background-crop'>
                        <img className='background' alt='background' src={casinoBackGround} />
                    </div>
                <Card title={'Premios por oficina'}>
                    <Collapse bordered={false}>
                        {
                            rewards.map((office, i) => (
                                <Panel key={i} header={office.name}>
                                    <Table key={i} columns={columns} dataSource={office.rewards}/>
                                </Panel>
                            ))
                        }
                    </Collapse>
                </Card>
                </div>
            </div>
        );
    }
}

RewardsList.propTypes = {
    rewardsByOffice: PropTypes.array
};

RewardsList.defaultProps = {
    rewardsByOffice: [
        {
            office: 'Chicó',
            rewards: [
                {
                    name: 'Televisor',
                    pointsNeeded: 123,
                    available: true
                },
                {
                    name: 'Carro',
                    pointsNeeded: 123333,
                    available: true
                },
            ]
        },
        {
            office: 'Rosales',
            rewards: [
                {
                    name: 'Televisor',
                    pointsNeeded: 123,
                    available: true
                },
                {
                    name: 'Carro',
                    pointsNeeded: 123333,
                    available: true
                },
            ]
        },
        ]
};

export default RewardsList;