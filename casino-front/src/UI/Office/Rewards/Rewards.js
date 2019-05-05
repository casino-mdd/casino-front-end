import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Collapse, Card} from 'antd'
import {Table} from 'antd'

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
                    dataIndex: 'pointsNeeded',
                    key: 'pointsNeeded'
                },
                {
                    title: 'Disponible',
                    dataIndex: 'available',
                    key: 'available'
                },
            ]
        };
    }

    render(){
        const { rewardsByOffice } = this.props;
        const { columns } = this.state;
        return(
            <div style={{padding: '20px'}}>
                <Card title={'Premios por oficina'}>
                    <Collapse bordered={false}>
                        {
                            rewardsByOffice.map((office, i) => (
                                <Panel key={i} header={office.office}>
                                    <Table key={i} columns={columns} dataSource={office.rewards}/>
                                </Panel>
                            ))
                        }
                    </Collapse>
                </Card>

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