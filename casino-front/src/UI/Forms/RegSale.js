import {
    Form, Input, Button, Typography, Select,
} from 'antd/lib/index';
import 'antd/dist/antd.css';

import React from 'react'


const payment = [{
    value: 'Cash',
    label: 'Efectivo',
}, {
    value: 'Credit',
    label: 'Tarjeta de crédito',
},
{
    value: 'Debit',
    label: 'Tarjeta débito',
}
];

class RegSale extends React.Component{
    state = {
        confirmDirty: false,
        //  autoCompleteResult: [],
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
            <div>
                <br/>
                <center>
                    <Title>Registro de venta de fichas</Title>
                </center>
                <br/>

                <Form  {...formItemLayout} >
                    <Form.Item
                        label="Cédula cliente"
                    >
                        {getFieldDecorator('id', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Número de fichas"
                    >
                        {getFieldDecorator('token', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Costo total"
                    >
                        {getFieldDecorator('cost', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Método de pago"
                    >
                        {getFieldDecorator('payment', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Select placeholder='Seleccione' options={payment} >
                                {payment.map((option, i) => (
                                    <Select.Option value={option.value} key={i}>
                                        {option.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button  type="primary" htmlType="submit">Registrar</Button>
                    </Form.Item>

                </Form>

            </div>
        );
    }
}

export default Form.create()(RegSale)
