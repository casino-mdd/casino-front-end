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

const status = [{
    value: 'Active',
    label: 'Activo',
}, {
    value: 'Inactive',
    label: 'Inactivo',
},
    {
        value: 'Retired',
        label: 'Pensionado',
    },
    {
        value: 'NoSpec',
        label: 'Sin especificar',
    }

];

class RegOffice extends React.Component{
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
                    <Title>Registro de Sucursales</Title>
                </center>
                <br/>

                <Form  {...formItemLayout} >
                    <Form.Item
                        label="Nombre"
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Por favor ingrese el nombre de la sucursal', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Ciudad"
                    >
                        {getFieldDecorator('city', {
                            rules: [{ required: true, message: 'Por favor ingrese una ciudad', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Dirección"
                    >
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: 'Por favor ingrese una dirección', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Teléfono"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Por favor ingrese un número telefónico', whitespace: true }],
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

export default Form.create()(RegOffice)
