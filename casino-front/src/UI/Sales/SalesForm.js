import React from 'react'
import {Form, Input, Button, Typography, Select} from 'antd/lib/index';
import SalesServuces from '../../Services/SaleServices';

const payment = [{
    value: 'Efectivo',
    label: 'Efectivo',
}, {
    value: 'Tarjeta credito',
    label: 'Tarjeta credito',
},
    {
        value: 'Tarjeta debito',
        label: 'Tarjeta debito',
    }
];

class SaleRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            //  autoCompleteResult: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                console.log(values);
                const { userInfo } = this.props;
                console.log('user info', userInfo);
                const saleInfo = {
                    token: values.token,
                    cost: values.cost,
                    paymentMethod: values.payment,
                    idenNumClient: values.clientIdentification,
                    idenNumEmployee: userInfo.userIdentification
                };
                SalesServuces.registerSale(saleInfo);
            }else{

            }
        })
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

        const { Title } = Typography;

        //What is shown in display
        return(
            <div align="center">
                <br/>
                <Title>Registro de ventas</Title>
                <br/>

                <Form  {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label="Cédula cliente"
                    >
                        {getFieldDecorator('clientIdentification', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input type="number"/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Número de fichas"
                    >
                        {getFieldDecorator('token', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input type="number"/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Costo total"
                    >
                        {getFieldDecorator('cost', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input type="number"/>
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

export default Form.create()(SaleRegister)