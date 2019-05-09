import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Modal} from 'antd';
import {ErrorMsg} from '../GeneralComponents/Messages';
import 'antd/dist/antd.css';

class OfficeForm extends React.Component{
    constructor(props){
     super(props);
     this.state = {
        confirmDirty: false,
        //  autoCompleteResult: [],
     };
     this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err){
                console.log('office', values);
                const officeInfo = {
                    address: values.address,
                    city: values.city,
                    name: values.name
                };

                this.props.createOffice(officeInfo);
            }else{
                ErrorMsg('Información incompleta');
            }

        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        const { mode, visible, onCancel } = this.props;
        const title = (mode === 'create'
        ? 'Crear'
        : 'Editar') + ' oficina';
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