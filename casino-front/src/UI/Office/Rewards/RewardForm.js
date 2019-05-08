import React from 'react'
import {Form, Input, Button, Typography} from 'antd/lib/index';
import {WarningMsg} from '../../GeneralComponents/Messages';
import {Redirect} from 'react-router-dom';
import Routes from '../../../utils/routes';

class RegReward extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            createdReward: false,
            //  autoCompleteResult: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                const {userInfo} = this.props;
                console.log('user info', userInfo);
                const rewardInfo = {
                    name: values.name,
                    pointsNeed: values.points,
                    identNumberEmployee: userInfo.userIdentification
                };

                this.props.createReward(rewardInfo);
                this.setState({createdReward: true});
            }else{
                WarningMsg('Hay campos por validar');
            }}
        )
    }


    render(){
        const { getFieldDecorator } = this.props.form;
        const { createdReward } = this.state;

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
            <div align="center">
                {createdReward === true &&
                    <Redirect to={Routes.rewards}/>
                }
                <br/>
                <Title>Registro de premios</Title>
                <br/>

                <Form  {...formItemLayout} onSubmit={this.handleSubmit}>
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