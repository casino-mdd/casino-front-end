import {
    Form, Input, Button, Typography,
} from 'antd/lib/index';
import 'antd/dist/antd.css';

import React from 'react'

class RegReward extends React.Component{
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

        const { Title } = Typography;

        //What is shown in display
        return(
            <div>
                <br/>
                <center>
                    <Title>Registro de premios</Title>
                </center>
                <br/>

                <Form  {...formItemLayout} >
                    <Form.Item
                        label="Nombre del premio"
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Puntos equivalentes"
                    >
                        {getFieldDecorator('points', {
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

export default Form.create()(RegReward)
