import React from 'react';
import PropTypes from 'prop-types';

import {Form, Input, Button, Typography, Select, Modal, Row, Col} from 'antd';

const yesno = [{
    value: 'yes',
    label: 'Sí',
}, {
    value: 'no',
    label: 'No',
}
];

const role = [{
    value: 'admin',
    label: 'Administrador',
}, {
    value: 'employee',
    label: 'Funcionario',
}
];

const gender = [{
    value: 'F',
    label: 'Femenino',
}, {
    value: 'M',
    label: 'Masculino',
}];

class UserForm extends React.Component{
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
        const {mode, visible, onCancel, existingUser, offices} = this.props;

        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' usuario';

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
            <Modal
                visible={visible}
                onCancel={onCancel}
                footer={[

                ]}
            >
                <div >
                    <Form >
                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Username"
                                >
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    label="Contraseña"
                                >
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input type={'password'}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Cédula empleado"
                                >
                                    {getFieldDecorator('id', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input type="number"/>
                                    )}
                                </Form.Item>
                            </Col>

                            <Col md={12}>
                                <Form.Item
                                    label="Perfil"
                                >
                                    {getFieldDecorator('profile', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Nombre"
                                >
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    label="Apellido"
                                >
                                    {getFieldDecorator('surname', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Email"
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true },
                                            {type: 'email', message: 'Inngrese un email válido'}
                                        ],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    label="Teléfono"
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true },
                                            {type: 'number', message: 'Inngrese un número válido'}
                                        ],
                                    })(
                                        <Input type={'number'} style={{width: '100%'}}/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Edad"
                                >
                                    {getFieldDecorator('age', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true },
                                            {type: 'number', message: 'Inngrese un número válido'}
                                        ],
                                    })(
                                        <Input type={'number'} style={{width: '100%'}}/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    label="Género"
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true },],
                                    })(
                                        <Select style={{width: '100%'}}>
                                            {gender.map( (option, i) => (
                                                <Select.Option value={option.value} key={i}>
                                                    {option.label}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

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
                            label="Permisos"
                                >
                         {getFieldDecorator('rights', {
                             rules: [{ required: true, message: 'Por favor seleccione una opción' }],
                            })(
                                <Select placeholder='Seleccione' options={role} >
                                    {role.map((option, i) => (
                                        <Select.Option value={option.value} key={i}>
                                            {option.label}
                                        </Select.Option>
                                    ))}
                                </Select>
                            )}
                            </Form.Item>
                        <Form.Item
                            label="Activar usuario"
                        >
                            {getFieldDecorator('activate', {
                                rules: [{ required: true, message: 'Por favor seleccione una opción' }],
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

                    </Form>
                </div>
            </Modal>
        );
    }
}

UserForm.propTypes = {
    mode: PropTypes.string,
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    existingUser: PropTypes.object
};

UserForm.defaultProps = {
    mode: 'create',
    visible: false,
    onCancel: f => f,
    existingUser: undefined
};

export default Form.create()(UserForm)