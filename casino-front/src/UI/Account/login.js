import React, { Component } from 'react';
import { Form, Input, Button, Card, Col, Row } from 'antd';
import casinoBackGround from '../../assets/img/casinoBG.jpg';
import '../styles/loginStyles.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('Llamando submit');
        
    }

    render(){
        return(
            <Form className='sign-in-form' onSubmit={this.handleSubmit}>
                <h1>UN Casino iniciar sesión</h1>
                <div className='sign-in-background-crop'>
                    <img className='sign-in-background' alt='background' src={casinoBackGround} />
                </div>
                
                <Form.Item label='Usuario'>
                    <Input placeholder='Usuario' xs={6}/>
                </Form.Item>
                <Form.Item label='Contraseña'>
                    <Input placeholder='Contraseña' type='password'/>
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