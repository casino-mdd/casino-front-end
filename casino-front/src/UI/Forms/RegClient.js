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
                        label="Nombre"
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Por favor ingrese su nombre', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Apellido"
                    >
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Por favor ingrese su apellido', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Fecha de nacimiento"
                    >
                        {getFieldDecorator('date-picker', config)(
                            <DatePicker />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Genero"
                    >
                        {getFieldDecorator('gender', {
                            rules: [{ type: 'array', required: true, message: 'Por favor seleccione una opción' }],
                        })(
                            <Cascader options={gender} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label ="Correo"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'Este correo electrónico no es valido',
                            }, {
                                required: true, message: 'Por favor ingrese el correo electrónico con el cual desea crear la cuenta',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Dirección"
                    >
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: 'Por favor ingrese su dirección de residencia', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Teléfono"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Por favor ingrese su número telefónico', whitespace: true }],
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
