import React, { Component } from 'react'
import { Layout, Menu } from 'antd'

const { Header, Sider, Content } = Layout;
export default class NavigationSider extends Component{
    render(){
        return(
            <Layout>
                <Sider
                    collapsible
                >
                    <Menu theme='dark'>
                        <Menu.Item>
                            <span>ahhhhhhhhhhh</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>     
        )
    }
}