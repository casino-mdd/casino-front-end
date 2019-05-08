import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {List, Avatar, Card, Table, Row, Col, Button, Icon, Divider} from 'antd';
import OfficeForm from "./OfficeForm";


const office_columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Ciudad',
        dataIndex: 'city',
        key: 'city',
    }
];

class OfficesList extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible: true
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount(){
        this.props.fetchOffices();
    }

    toggleModal(flag){
        this.props.toggleModal(flag);
    }

    render(){
        console.log('Oficinas', this.props);
        const { visibleModal, offices } = this.props;
        console.log('Offices', offices);
        return(

            <div style={{padding: '20px'}}>
                <Row>
                    <Col md={2} offset={21}>
                        <Button type='primary' onClick={()=> this.toggleModal(true)}>
                            <Icon type='plus-circle'/>
                            Agregar oficina
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Table columns={office_columns} dataSource={offices}/>
                <Divider />
                <OfficeForm visible={visibleModal} onCancel={() => this.toggleModal(false)}
                    createOffice={this.props.createOffice}
                />
            </div>
        );
    }
}

OfficesList.propTypes = {
    offices: Proptypes.array,
    toggleModal: Proptypes.func,
    fetchOffices: Proptypes.func,
    visibleModal: Proptypes.bool
};

OfficesList.defaultProps = {
    offices: [],
    toggleModal: f => f,
    fetchOffices: f => f,
    visibleModal: false
};

export default OfficesList;