import React from 'react'
import {Form, Input, Button} from 'antd/lib/index';
import '../../styles/forms_bg.css'
import casinoBackGround from '../../../assets/img/casinoBG.jpg';

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

        //What is shown in display
        return(
            <div align="center">

                <Form  className='trx-form' {...formItemLayout} >
                    <br/>
                        <h1>Registro de premios</h1>
                    <br/>
                    <div className='trx-background-crop'>
                        <img className='trx-background' alt='background' src={casinoBackGround} />
                    </div>
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
                            <Input type="number"/>
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