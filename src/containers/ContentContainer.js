import React from 'react'
import '../sass/main.sass'
import { Layout } from 'antd'
import NoteRouter from '../components/NoteRouter'

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
                        <a href='notes/a/1'>01. Argomento 1</a>
                    </div>

                    <div className='subject-note'>
                        <a href='./a/2'>02. Argomento 2</a>
                    </div>
                    <div className='subject-note'>
                        <a href='./a/3'>03. Argomento 3</a>
                    </div>
                </div>

                <div className='subject'>
                    <div className='subject-name'>
                        Statistica
                    </div>

                    <div className='subject-note'>
                        <a href='/s/1'>01. Argomento 1</a>
                    </div>
                    
                    <div className='subject-note'>
                        <a href='/s/2'>02. Argomento 2</a>
                    </div>
                </div>
            </Sider>

            <Layout>
                <Header className='content-header'>
                    
                </Header>

                <Content className='content-area'>
                    <div className='raw'>
                        <NoteRouter />
                    </div>
                </Content>

                <Footer className='content-footer'>

                </Footer>
            </Layout>
        </Layout>
    )
}
