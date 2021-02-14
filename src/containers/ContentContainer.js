import React from 'react'
import './sass/main.sass'
import { Layout, Button } from 'antd'

const { Content, Header, Sider, Footer } = Layout;

export default function ContentContainer() {
    return (
        
        <Layout className='content-layout' hasSider>
            <Sider className='content-sider'>
                <h1>
                    <a href='/'>
                        il-secondo-semestre
                    </a>
                </h1>

                <div className='subject'>
                    <div className='subject-name'>
                        Algoritmi
                    </div>

                    <div className='subject-note'>
                        <a href='/'>01. Argomento 1</a>
                    </div>

                    <div className='subject-note'>
                        <a href='/'>02. Argomento 2</a>
                    </div>
                    <div className='subject-note'>
                        <a href='/'>03. Argomento 3</a>
                    </div>
                </div>

                <div className='subject'>
                    <div className='subject-name'>
                        Statistica
                    </div>

                    <div className='subject-note'>
                        <a href='/'>01. Argomento 1</a>
                    </div>
                    
                    <div className='subject-note'>
                        <a href='/'>02. Argomento 2</a>
                    </div>
                </div>
            </Sider>

            <Layout>
                <Header className='content-header'>
                    Header
                </Header>

                <Content className='content-area'>
                    <div className='raw'>
                        HTML here
                    </div>
                </Content>

                <Footer className='content-footer'>

                </Footer>
            </Layout>
        </Layout>
    )
}
