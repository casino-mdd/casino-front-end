import React from 'react'
import {Form, Input, Button, Typography, Select, Col, Row, Icon} from 'antd';

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
            <div align="center">
                <br/>
                <Title>Registro de intercambio de puntos</Title>
                <br/>

                <Form >
                    <Row>
                        <Col md={20}>
                            <Form.Item
                                label="Cédula cliente"
                            >
                                {getFieldDecorator('id', {
                                    rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                        </Col>
                        <Col md={4}>
                            <Button type={'primary'}>
                                <Icon type={'search'}/>
                                Consultar puntos
                            </Button>
                        </Col>
                    </Row>

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
                    <Form.Item>
                        <Button  type="primary" htmlType="submit">Registrar</Button>
                    </Form.Item>

                </Form>

            </div>
        );
    }
}

export default Form.create()(RegExchange)