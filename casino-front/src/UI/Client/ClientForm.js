import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, DatePicker, Typography, Select, Modal} from 'antd';

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

class ClientForm extends React.Component{
    state = {
        confirmDirty: false,
        //  autoCompleteResult: [],
    };


    render(){
        const { getFieldDecorator } = this.props.form;
        const { mode, visible, onCancel } = this.props;

        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' cliente';


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


        //What is shown in display
        return(
            <Modal title={title}
                visible={visible}
                onCancel={onCancel}
            >
                <div>
                    <Form  layout={"vertical"} >
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
                            label="Cédula"
                        >
                            {getFieldDecorator('id', {
                                rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                            })(
                                <Input type="number"/>
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
                                rules: [{ required: true, message: 'Por favor seleccione una opción' }],
                            })(
                                <Select placeholder='Seleccione' options={gender} >
                                    {gender.map((option, i) => (
                                        <Select.Option value={option.value} key={i}>
                                            {option.label}
                                        </Select.Option>
                                    ))}
                                </Select>
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
                                <Input type="number"/>
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button  type="primary" htmlType="submit">Registrar</Button>
                        </Form.Item>

                    </Form>
                </div>
            </Modal>
        );
    }
}

ClientForm.propTypes = {
    mode: PropTypes.string,
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    existingClient: PropTypes.object
};

ClientForm.defaultProps = {
    mode: 'create',
    visible: false,
    onCancel: f => f,
    existingClient: undefined
};


export default Form.create()(ClientForm)