import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Typography, Select, Modal, Row, Col} from 'antd';
import {ErrorMsg} from "../GeneralComponents/Messages";

const yesno = [{
    value: 'yes',
    label: 'Sí',
}, {
    value: 'no',
    label: 'No',
}
];

const gender = [{
    value: 'F',
    label: 'Femenino',
}, {
    value: 'M',
    label: 'Masculino',
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

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            confirmDirty: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                const userInfo = {
                    username: values.user,
                    password: values.password,
                    profile: values.rights,
                    position: values.job,
                    name: values.name,
                    surname: values.surname,
                    age: values.age,
                    email: values.email,
                    gender: values.gender,
                    idtentificationNumEmpl: values.id,
                    phone: values.phone,
                    idOffice: "1"
                };

                console.log('Before send' , userInfo);
                this.props.createUser(userInfo);
            }else{
                ErrorMsg('Información incompleta');
            }

        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const {mode, visible, onCancel, existingUser, offices} = this.props;

        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' usuario';

        //What is shown in display
        return(
            <Modal title={title}
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
    existingUser: PropTypes.object,
    offices: PropTypes.array
};

UserForm.defaultProps = {
    mode: 'create',
    visible: false,
    onCancel: f => f,
    existingUser: undefined
};

export default Form.create()(UserForm)