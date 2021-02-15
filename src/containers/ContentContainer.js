import React, { useState, useEffect } from 'react'
import '../sass/main.sass'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import NoteRouter from '../components/NoteRouter'

const { Content, Header, Sider, Footer } = Layout;

export default function ContentContainer() {
    const [notes, setNotes] = useState({});

    useEffect(() => {
        async function fetchData() {
            var fixedNotes = [];

            const response = await fetch('/');

            const parser = document.createElement('html');
            parser.innerHTML = await response.text();
            const scraped = parser.getElementsByTagName('Note');

            for(let i = 0; i < scraped.length; i++) {
                let str = scraped[i].outerText;

                let id = str.split('-')[1].split('.')[0];
                let subject = str.split('-')[0];

                fixedNotes[i] = {
                    id: id,
                    subject: subject
                }
            }

            setNotes(fixedNotes);
        }

        fetchData();
    }, []);

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
                        <a href=''>01. Argomento 1</a>
                    </div>

                    <div className='subject-note'>
                        <a href=''>02. Argomento 2</a>
                    </div>
                    <div className='subject-note'>
                        <a href=''>03. Argomento 3</a>
                    </div>
                </div>

                <div className='subject'>
                    <div className='subject-name'>
                        Statistica
                    </div>

                    <div className='subject-note'>
                        <a href=''>01. Argomento 1</a>
                    </div>
                    
                    <div className='subject-note'>
                        <a href=''>02. Argomento 2</a>
                    </div>
                </div>
            </Sider>

            <Layout>
                <Header className='content-header'>
                    
                </Header>

                <Content className='content-area'>
                    <div className='raw'>
                        { notes.length ? (
                            <NoteRouter notes={notes} />
                        ) : (
                            'Loading'
                        )}
                    </div>
                </Content>

                <Footer className='content-footer'>

                </Footer>
            </Layout>
        </Layout>
    )
}
