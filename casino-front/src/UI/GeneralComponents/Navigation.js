import React, { Component } from 'react'
import { Layout, Menu } from 'antd'

const { Header, Sider, Content } = Layout;
export default class NavigationSider extends Component{
    render(){
        return(
            <Menu theme='dark' mode='horizontal'>
                <Menu.Item>
                    Casino home
                </Menu.Item>
            </Menu> 
        )
    }
}