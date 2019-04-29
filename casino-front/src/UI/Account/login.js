import React, { Component } from 'react';
import { Form, Input, Button, Card, Col, Row } from 'antd';
import casinoBackGround from '../../assets/img/casinoBG.jpg';

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
            <div>
                <h1>Casino iniciar sesión</h1>
                <div>
                    <img src={casinoBackGround} style={{
                        width: '110%',
                        height: '100vh',
                        float: 'right',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}/>
                </div>
                <Col md={6}>
                <Card>
                <Form onSubmit={this.handleSubmit}>
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
                </Card>
                </Col>                
            </div>
        );
    }
}



export default Form.create()(Login);