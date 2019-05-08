import React from 'react';
import PropTypes from 'prop-types';

import {Form, Input, Button, Select, Modal} from 'antd';
import {ErrorMsg} from "../GeneralComponents/Messages";

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

class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            confirmDirty: false,
            //  autoCompleteResult: [],
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
                    id: values.id,
                    user: values.user,
                    password: values.password,
                    rights: values.rights,
                    activate: values.activate
                };

             //   this.props.createOffice(userInfo);
            }else{
                ErrorMsg('Información incompleta');
            }

        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const {mode, visible, onCancel, existingUser} = this.props;

        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' usuario';

        //What is shown in display
        return(
            <Modal title={title}
                visible={visible}
                onCancel={onCancel}
                   footer={[
                       <Button key="back" onClick={onCancel}>Cancelar</Button>,
                       <Button key="submit"  htmlType={'submit'} type="primary" onClick={this.handleSubmit}>
                           Registrar
                       </Button>,
                   ]}
                >
                <div >


                    <Form   >
                        <Form.Item
                            label="Cédula funcionario"
                        >
                            {getFieldDecorator('id', {
                                rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                            })(
                                <Input type="number"/>
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