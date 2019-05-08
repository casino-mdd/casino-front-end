import React, { Component } from 'react';
import { Form, Input, Button, Card, Col, Row, message } from 'antd';
import {Redirect} from 'react-router-dom';
import casinoBackGround from '../../assets/img/casinoBG.jpg';
import '../styles/loginStyles.css'
import Routes from '../../utils/routes';

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
                this.props.signIn(userInfo)
            }else{
                message.warning('Campos invalidos');
            }
        }
        )
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        const {isSigned} = this.props;
        return(
            <div>
                {isSigned === true &&
                    <Redirect to={Routes.offices}/>
                }
                {isSigned === false &&
                    <Form className='sign-in-form' onSubmit={this.handleSubmit}>
                <h1>UN Casino iniciar sesión</h1>
                <div className='sign-in-background-crop'>
                    <img className='sign-in-background' alt='background' src={casinoBackGround} />
                </div>

                <Form.Item label='Usuario'>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Ingrese un nombre de usuario'}]
                    })
                    (
                        <Input placeholder='Usuario' xs={6}/>
                    )
                    }
                </Form.Item>
                <Form.Item label='Contraseña'>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Ingrese la contraseña'}]
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
                }
            </div>
        );
    }
}

export default Form.create()(Login);