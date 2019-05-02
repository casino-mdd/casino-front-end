import {
    Form, Input, Cascader, Button, DatePicker, Typography,
} from 'antd';
import 'antd/dist/antd.css';

import React from 'react'

const gender = [{
    value: 'Female',
    label: 'Femenino',
}, {
    value: 'Male',
    label: 'Masculino',
},
    {
        value: 'NoSpec',
        label: 'Sin especificar',
    }

];

class RegisterClient extends React.Component{
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

        const config = {
            rules: [{ type: 'object', required: true, message: 'Por favor seleccione una fecha' }],
        };

        const { Title } = Typography;

        //What is shown in display
        return(
            <div>
                <br/>
                <center>
                    <Title>Registro de clientes</Title>
                </center>
                <br/>

                <Form  {...formItemLayout} >
                    <Form.Item
                        label="Nombres"
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Apellidos"
                    >
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Fecha de nacimiento"
                    >
                        {getFieldDecorator('date-picker', config)(
                            <DatePicker  placeholder='Fecha'/>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Género"
                    >
                        {getFieldDecorator('gender', {
                            rules: [{ type: 'array', required: true, message: 'Por favor seleccione una opción' }],
                        })(
                            <Cascader  placeholder='Seleccione' options={gender} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label ="Correo"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'Este correo no es válido',
                            }, {
                                required: true, message: 'Este campo es obligatorio',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Teléfono"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
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

export default Form.create()(RegisterClient)
