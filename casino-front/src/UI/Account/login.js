import React, { Component } from 'react';
import { Form, Input, Button, Card, Col, Row, message } from 'antd';
import casinoBackGround from '../../assets/img/casinoBG.jpg';
import '../styles/loginStyles.css'
import {signIn} from '../../Store/Actions/UserActions';
class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Llamando submit');
        this.props.form.validateFieldsAndScroll(['username', 'password'],
        (error, values) => {
            console.log('validating form', error, values);
            if(!error){
                const userInfo = {
                    username: values.username,
                    password: values.password
                };
                signIn(userInfo)
            }else{
                message.warning('Campos invalidos');
            }
        }
        )
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form className='sign-in-form' onSubmit={this.handleSubmit}>
                <br/>
                <h1>UN Casino </h1>
                <h1>Iniciar sesión</h1>
                <br/>
                <div className='sign-in-background-crop'>
                    <img className='sign-in-background' alt='background' src={casinoBackGround} />
                </div>
                
                <Form.Item label='Usuario'>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Ingrese su nombre de usuario'}]
                    })
                    (
                        <Input placeholder='Usuario' xs={6}/>
                    )
                    }
                </Form.Item>
                <Form.Item label='Contraseña'>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Ingrese su contraseña'}]
                    })
                    (
                        <Input placeholder='Contraseña' type='password'/>
                    )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(Login);