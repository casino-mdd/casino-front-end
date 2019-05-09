import React from 'react'
import {
    Form, Button, Table,Select, Col, Row, Icon, Card, InputNumber, Collapse
} from 'antd';
import '../styles/forms_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';
import {ErrorMsg} from "../GeneralComponents/Messages";

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
        if(clientIdentification==null)
        {
            ErrorMsg('Campos invalidos');
        }
        else {
            console.log(clientIdentification);
            this.setState({queriedUser: true})
            const {userInfo, clientInfo} = this.props;
            console.log('info for calling service', userInfo, clientIdentification);
            this.props.getClientPoints(clientIdentification, userInfo.userIdentification);
            console.log(this.props.clientInfo);
        }
    }

    performExchange() {
        const {userInfo} = this.props;
        const clientIdentification = this.props.form.getFieldValue('clientIdentification');
        const reward = this.props.form.getFieldValue('reward');

        if (clientIdentification == null || reward==null) {
            ErrorMsg('Campos invalidos');
        }
        else {
        const exchangeInfo = {
            idenNumClient: clientIdentification,
            idenNumEmployee: userInfo.userIdentification,
            idReward: reward
        };

        this.props.performExchange(exchangeInfo);
        }
    }


    render(){
        const { getFieldDecorator } = this.props.form;

        const {queriedUser} = this.state;
        const {clientInfo} = this.props;

        const availableRewards = clientInfo !== undefined
        ? clientInfo.rewards: [];

        const pointsArray = clientInfo !== undefined
        ? clientInfo.points:[];

        //What is shown in display
        return(
            <div align="left" style={{padding: '20px'}}>
                <div className='trx-background-crop'>
                    <img className='trx-background' alt='background' src={casinoBackGround} />
                </div>
                <Card className='trx-form-card1' title={'Info cliente'}>
                    <Row gutter={9}>
                        <Col md={8}>
                            <Form.Item layout={'inline'}>
                                {getFieldDecorator('clientIdentification', {
                                    rules: [{ required: true, message: 'Este campo es obligatorio'}],
                                })(
                                 <InputNumber type="number" placeholder={'Cedula cliente'} style={{width: '100%'}}/>
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
                                    <span>Nombre: </span>
                                    <span>{clientInfo !== undefined  ?clientInfo.name :''}</span>
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
                <Card className='trx-form-card2' title={'Registro incercambios'}>
                    <Form>
                        <Row >
                            <Col md={8}>
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
                            <Col md={8}>
                            </Col>

                            <Col>
                                < Form.Item >
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