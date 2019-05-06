import React from 'react'
import {Form, Input, Button,
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
    state = {
        confirmDirty: false,
        //  autoCompleteResult: [],
        queriedUser: false,
        enoughPoints: false
    };

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

        const { Title } = Typography;

        //What is shown in display
        return(
            <div align="left" style={{padding: '20px'}}>

                <Card title={'Info cliente'}>
                    <Row>
                        <Col md={8}>
                            <Form.Item label="Cédula cliente" layout={'inline'}>
                                <InputNumber style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col md={2}>
                            <Button type={'primary'}>
                                <Icon type={'search'}/>
                                Consultar puntos
                            </Button>
                        </Col>
                    </Row>
                    <Collapse
                        disabled={true}
                    >
                        <Collapse.Panel key={'info'} header={'Información personal'}>
                        </Collapse.Panel>
                        <Collapse.Panel key={'points'} header={'Información puntos'}>
                        </Collapse.Panel>
                    </Collapse>
                </Card>
                <br/>
                <center>
                <Title>Registro de intercambios</Title>
                </center>
                <br/>

                <Form layout={"inline"}>
                    <Row>
                    <Col md={7}>
                    </Col>
                        <Col md={10}>
                            <Form.Item
                                label="Cédula cliente"
                            >
                                {getFieldDecorator('id', {
                                    rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                })(
                                    <Input type="number"/>
                                )}
                            </Form.Item>
                        </Col>
                        <Col md={4}>
                            <Form.Item>
                                <Button type={'primary'}>
                                    <Icon type={'search'}/>
                                    Consultar puntos
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={7}>
                        </Col>
                        <Col md={10}>
                            <Form.Item
                                label="Premio deseado"
                            >
                                {getFieldDecorator('reward', {
                                    rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                               })(
                                  <Select placeholder='Seleccione' options={reward} >
                                        {reward.map((option, i) => (
                                         <Select.Option value={option.value} key={i}>
                                               {option.label}
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
                                <Button  type="primary" htmlType="submit">Registrar</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </div>
        );
    }
}

export default Form.create()(RegExchange)