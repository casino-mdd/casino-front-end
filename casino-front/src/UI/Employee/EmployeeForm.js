import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, DatePicker, Typography, Select, Modal, Row, Col, InputNumber, message} from 'antd';
import 'antd/dist/antd.css';

const gender = [{
    value: 'F',
    label: 'Femenino',
}, {
    value: 'M',
    label: 'Masculino',
}

];

class EmployeeForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            //  autoCompleteResult: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                console.log('To send:', values);
                const employeeInfo = {
                    position: values.job,
                    name: values.name,
                    surname: values.surname,
                    age: values.age,
                    email: values.email,
                    gender: values.gender,
                    identificationNumber: values.id,
                    phone: values.phone,
                    idOffice: values.office
                };

                console.log('Before send' , employeeInfo);

                this.props.createEmployee(employeeInfo);
            }else{
                message.warning('Hay campos por validar');
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { mode, visible, onCancel, offices } = this.props;
        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' funcionario';

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
                <div>
                    <Form layout={"vertical"} onSubmit={this.handleSubmit}>
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
                                    label="Teléfono"
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input type="number"/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    label ="Correo"
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: 'Este correo electrónico no es válido',
                                        }, {
                                            required: true, message: 'Este campo es obligatorio',
                                        }],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Cédula"
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
                                    label="Edad"
                                >
                                    {getFieldDecorator('age', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio'}],
                                    })
                                    (
                                        <Input type={'number'} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={8}>
                            <Col md={12}>
                                <Form.Item
                                    label="Cargo"
                                >
                                    {getFieldDecorator('job', {
                                        rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    label={'Oficina'}
                                >
                                    {getFieldDecorator('office', {
                                        rules: [{ required: true, message: 'Por favor seleccione una opción' }],
                                    })
                                    (
                                        <Select notFoundContent={'No hay oficinas listadas'}>
                                            {offices.map( (office, i) => (
                                                <Select.Option key={i} value={office.idOffice}>
                                                    {office.name}
                                                </Select.Option>
                                            ))
                                            }
                                        </Select>
                                    )

                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
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
                            </Col>
                        </Row>

                        {/*<Form.Item {...tailFormItemLayout}>
                            <Button  type="primary" htmlType="submit">Registrar</Button>
                        </Form.Item>*/}

                    </Form>

                </div>
            </Modal>
        );
    }
}

EmployeeForm.propTypes = {
    mode: PropTypes.string,
    existingEmployee: PropTypes.object,
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    offices: PropTypes.array
};

EmployeeForm.defaultProps = {
    mode: 'create',
    existingEmployee: undefined,
    visible: false,
    onCancel: f => f,
    offices: []
};

export default Form.create()(EmployeeForm)