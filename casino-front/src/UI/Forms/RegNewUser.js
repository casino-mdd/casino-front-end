import {
    Form, Input, Button, Typography, Select,
} from 'antd';
import 'antd/dist/antd.css';

import React from 'react'


const yesno = [{
    value: 'yes',
    label: 'Sí',
}, {
    value: 'no',
    label: 'No',
}
];

class RegNewUser extends React.Component{
    state = {
        confirmDirty: false,
        //  autoCompleteResult: [],
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Las contraseñas no coinciden');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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
            <div>
                <br/>
                <center>
                    <Title>Registro de nuevos usuarios</Title>
                </center>
                <br/>

                <Form  {...formItemLayout} >
                    <Form.Item
                        label="Cédula empleado"
                    >
                        {getFieldDecorator('id', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Nombre de usuario"
                    >
                        {getFieldDecorator('user', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Contraseña"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Por favor ingrese una contraseña',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password" />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Confirmar contraseña"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Por favor confirme su contraseña',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Activar usuario"
                    >
                        {getFieldDecorator('activate', {
                            rules: [{ required: true, message: 'Por favor confirme su contraseña' }],
                        })(
                            <Select placeholder='Seleccione' options={yesno} >
                                {yesno.map((option, i) => (
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

export default Form.create()(RegNewUser)
