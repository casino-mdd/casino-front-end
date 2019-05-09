import React from 'react'
import {Form, Input, Button, Select, message} from 'antd/lib/index';
import '../styles/forms_bg.css'
import casinoBackGround from '../../assets/img/casinoBG.jpg';
import {Redirect} from 'react-router-dom';
import Routes from '../../utils/routes';

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
    isSuccess = false;

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            //  autoCompleteResult: [],
            requestSent: false,
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
                this.props.regSale(saleInfo);

            }else{
                message.error('Campos invalidos');
            }

            this.setState({requestSent: true});
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const {requestSent} = this.state;
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

        //What is shown in display
        return(
            <div align="center">
                {requestSent === true &&
                    <Redirect to={Routes.sales}/>
                }
                <Form  className='trx-form' {...formItemLayout} onSubmit={this.handleSubmit}>
                    <br/>
                    <h1>Registro de ventas</h1>
                    <br/>
                    <div className='trx-background-crop'>
                        <img className='trx-background' alt='background' src={casinoBackGround} />
                    </div>
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