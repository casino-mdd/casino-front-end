import React from 'react'
import {Form, Input, Button, Table,
Typography, Select, Col, Row, Icon, Card, InputNumber, Collapse} from 'antd';

const reward = [{
    value: 'reward1',
    label: 'Premio1',
}, {
    value: 'reward2',
    label: 'Premio2',
},
    {
        value: 'reward3',
        label: 'Premio3',
    }
];

class RegExchange extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            //  autoCompleteResult: [],
            queriedUser: false,
            enoughPoints: false,
            columns: [
                {
                    title: 'Cantidad de puntos',
                    dataIndex: 'points',
                    key: 'points'
                },
                {
                    title: 'Fecha vencimiento',
                    dataIndex: 'exp_date',
                    key: 'exp_date'
                }
            ],
            availableRewards: []
        };
        this.queryClientPoints = this.queryClientPoints.bind(this);
        this.performExchange = this.performExchange.bind(this);
    }

    queryClientPoints(){
        const clientIdentification = this.props.form.getFieldValue('clientIdentification');
        console.log(clientIdentification);
        this.setState({queriedUser: true})
        const {userInfo, clientInfo} = this.props;
        console.log('info for calling service', userInfo, clientIdentification);
        this.props.getClientPoints(clientIdentification, userInfo.userIdentification);
        console.log(this.props.clientInfo);
    }

    performExchange(){
        const {userInfo} = this.props;
        const clientIdentification = this.props.form.getFieldValue('clientIdentification');
        const reward = this.props.form.getFieldValue('reward');
        const exchangeInfo = {
            idenNumClient: clientIdentification,
            idenNumEmployee: userInfo.userIdentification,
            idReward: reward
        };

        this.props.performExchange(exchangeInfo);
    }


    render(){
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const {queriedUser} = this.state;
        const {clientInfo} = this.props;

        const availableRewards = clientInfo !== undefined
        ? clientInfo.rewards: [];
        //What is shown in display
        return(
            <div align="left" style={{padding: '20px'}}>

                <Card title={'Info cliente'}>
                    <Row gutter={9}>
                        <Col md={8}>
                            <Form.Item layout={'inline'}>
                                {getFieldDecorator('clientIdentification', {
                                })(
                                    <InputNumber placeholder={'Cedula cliente'} style={{width: '100%'}}/>
                                )
                                }
                            </Form.Item>
                        </Col>
                        <Col md={2}>
                            <Button type={'primary'} onClick={this.queryClientPoints}>
                                <Icon type={'search'}/>
                                Consultar puntos
                            </Button>
                        </Col>
                    </Row>
                    {queriedUser === true &&
                    <Collapse
                        disabled={true}
                    >
                        <Collapse.Panel key={'info'} header={'Información personal'}>
                            <Row gutter={8}>
                                <Col md={2}>
                                    <span>Nombre</span>
                                    <span>{clientInfo !== undefined
                                        ?clientInfo.name
                                        :''
                                    }</span>

                                </Col>
                            </Row>
                        </Collapse.Panel>
                        <Collapse.Panel key={'points'} header={'Información puntos'}>
                            <Table columns={this.state.columns} dataSource={clientInfo !== undefined
                                ?clientInfo.points : []}/>
                        </Collapse.Panel>
                    </Collapse>
                    }

                </Card>
                <br/>
                <Card title={'Registro incercambios'}>
                    <Form>
                        <Row>

                            <Col md={10}>
                                <Form.Item
                                    label="Premio deseado"
                                    style={{width: '100%'}}
                                >
                                    {getFieldDecorator('reward', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio'}],
                                    })(
                                        <Select placeholder='Seleccione' style={{width: '100%'}}>
                                            {availableRewards.map((reward, i) => (
                                                <Select.Option value={reward.idReward} key={i} style={{width: '100%'}}>
                                                    {reward.name}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={15}>
                            </Col>
                            <Col md={1}>
                                < Form.Item>
                                    <Button  type="primary" onClick={this.performExchange}>
                                        Redimir premio
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>

            </div>
        );
    }
}

export default Form.create()(RegExchange)