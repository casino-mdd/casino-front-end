import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input,  Button,  Typography, Modal} from 'antd';
import 'antd/dist/antd.css';

class OfficeForm extends React.Component{
    constructor(props){
     super(props);
     this.state = {
        confirmDirty: false,
        //  autoCompleteResult: [],
     };
    }
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

        const { mode, visible, onCancel } = this.props;
        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' oficina';
        //What is shown in display
        return(
            <Modal title={title}
                visible={visible}
                onCancel={onCancel}
            >
                <div>
                    <Form layout={"vertical"}>
                        <Form.Item
                            label="Nombre de oficina"
                        >
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="Ciudad"
                        >
                            {getFieldDecorator('city', {
                                rules: [{ required: true, message: 'Este campo es obligatorio', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item
                            label="Dirección"
                        >
                            {getFieldDecorator('address', {
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
            </Modal>
        );
    }
}

OfficeForm.propTypes = {
    mode: PropTypes.string,
    existingOffice: PropTypes.object,
    onCancel: PropTypes.func
};

OfficeForm.defaultProps = {
    mode: 'create',
    existingOffice: undefined,
    onCancel: f => f

};

export default Form.create()(OfficeForm)