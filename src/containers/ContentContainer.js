import React, { useState, useEffect } from 'react'
import '../sass/main.sass'
import { Layout, Menu, Spin } from 'antd'
import NoteRouter from '../components/NoteRouter'

const { Content, Header, Sider, Footer } = Layout;
const { SubMenu } = Menu;

export default function ContentContainer() {
    const [notes, setNotes] = useState({});

    const [collapsed, setCollapsed] = useState(false);

    const [a_items, a_setItems] = useState([]); // Algoritmi
    const [s_items, s_setItems] = useState([]); // Statistica
    const [r_items, r_setItems] = useState([]); // Reti
    const [w_items, w_setItems] = useState([]); // Web

    useEffect(() => {
        const fetchNotes = async () => {
            console.log('Fetching notes...');

            var fixedNotes = [];

            const response = await fetch('/il-secondo-semestre/');

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

            console.log('Note fetched, found ', + String(fixedNotes.length));

            fetchSiderItems(fixedNotes);
        }

        async function fetchSiderItems(notes) {
            console.log('Fetching items... [# notes: ' + notes.length + ']');

            function getTemplate(id, subject) {
                const link = '/il-secondo-semestre/#/notes/' + String(subject) + '/' + String(id);
                const key = String(subject) + '-' + String(id);

                console.log(key);

                return (
                    <Menu.Item key={key}>
                        <a href={link}># Argomento {id}</a>
                    </Menu.Item>
                );
            }

            var a_fixedItems = [], 
                s_fixedItems = [], 
                r_fixedItems = [], 
                w_fixedItems = [];

            for(let i = 0; i < notes.length; i++) {
                switch(notes[i].subject) {
                    case 'Reti':
                        r_fixedItems[r_fixedItems.length] = getTemplate(notes[i].id, 'Reti');
                        break;
    
                    case 'Algoritmi':
                        a_fixedItems[a_fixedItems.length] = getTemplate(notes[i].id, 'Algoritmi');
                        break;
    
                    case 'Statistica':
                        s_fixedItems[s_fixedItems.length] = getTemplate(notes[i].id, 'Statistica');
                        break;
                                
                    case 'Web':
                        w_fixedItems[w_fixedItems.length] = getTemplate(notes[i].id, 'Web');
                        break;
                }
            }
            
            a_setItems(a_fixedItems);
            r_setItems(r_fixedItems);
            s_setItems(s_fixedItems);
            w_setItems(w_fixedItems);
        }

        fetchNotes();
    }, []);

    const onCollapse = collapsed => {
        console.log(collapsed ? true : false);
        setCollapsed(collapsed ? true : false);
      };

    return (
        <Layout className='content-layout' hasSider>
            <Sider 
                theme='dark' 
                className='content-sider' 
                width={300}
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
            >
                <Menu 
                    mode='inline' 
                    theme='dark'
                    defaultOpenKeys={['alg']}
                    defaultSelectedKeys={['Algoritmi-1']}
                >
                    { a_items.length ? (
                        <SubMenu key='alg' title='Algoritmi'>
                            {a_items}
                        </SubMenu>
                    ) : ( <div /> )}
                </Menu>

                <Menu 
                    mode='inline' 
                    theme='dark'
                >
                    { s_items.length ? (
                        <SubMenu key='stat' title='Statistica'>
                            <Menu.Item>
                                {s_items}
                            </Menu.Item>
                        </SubMenu>
                    ) : ( <div /> )}
                </Menu>

                <Menu 
                    mode='inline' 
                    theme='dark'
                >
                    { r_items.length ? (
                        <SubMenu key='reti' title='Reti'>
                            <Menu.Item>
                                {r_items}
                            </Menu.Item>
                        </SubMenu>
                    ) : ( <div /> )}
                </Menu>

                <Menu 
                    mode='inline' 
                    theme='dark'
                >
                    { w_items.length ? (
                        <SubMenu key='web' title='Web'>
                            <Menu.Item>
                                {w_items}
                            </Menu.Item>
                        </SubMenu>
                    ) : ( <div /> )}
                </Menu>

            </Sider>

            <Layout>
                <Header className='content-header'></Header>

                <Content className='content-area'>
                    <div className='raw'>
                        { notes.length ? (
                            <NoteRouter notes={notes} />
                        ) : (
                            <div className='loader'>
                                <Spin 
                                    size='large'
                                />
                            </div>
                        )}
                    </div>
                </Content>

                <Footer className='content-footer'>
                    <div style={{ float: 'right'}}>
                        <a target="_blank" href="https://github.com/v1enna/il-secondo-semestre">GitHub</a>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    )
}
