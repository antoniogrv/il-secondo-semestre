import React, { useState, useEffect } from 'react'
import '../sass/main.sass'
import { Layout, Result } from 'antd'
import { Switch, Route } from 'react-router-dom'
import NoteRouter from '../components/NoteRouter'

const { Content, Header, Sider, Footer } = Layout;

export default function ContentContainer() {
    const [notes, setNotes] = useState({});

    const [a_items, a_setItems] = useState([]); // Algoritmi
    const [s_items, s_setItems] = useState([]); // Statistica
    const [r_items, r_setItems] = useState([]); // Reti
    const [w_items, w_setItems] = useState([]); // Web

    useEffect(() => {
        const fetchNotes = async () => {
            console.log('Fetching notes...');

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

            console.log('Note fetched, found ', + String(fixedNotes.length));

            fetchSiderItems(fixedNotes);
        }

        async function fetchSiderItems(notes) {
            console.log('Fetching items... [# notes: ' + notes.length + ']');

            function getTemplate(id, subject) {
                const link = '/notes/' + String(subject) + '/' + String(id);
                const key = String(subject) + '-' + String(id);

                return (
                    <div key={key} className='subject-note'>
                        <a href={link}># Argomento {id}</a>
                    </div>
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
                        console.log('alg');
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

    return (
        <Layout className='content-layout' hasSider>
            <Sider className='content-sider'>
                <h1>
                    <a href='/'>
                        il-secondo-semestre
                    </a>
                </h1>

                { a_items.length ? (
                    <div className='subject'>
                        <div className='subject-name'>
                            Algoritmi
                        </div>
                        
                        <div className='subject-note'>
                            {a_items}
                        </div>
                    </div>
                ) : ( <div /> )}

                { s_items.length ? (
                    <div className='subject'>
                        <div className='subject-name'>
                            Statistica
                        </div>
                        
                        <div className='subject-note'>
                            {s_items}
                        </div>
                    </div>
                ) : ( <div /> )}

                { w_items.length ? (
                    <div className='subject'>
                        <div className='subject-name'>
                            Web
                        </div>
                        
                        <div className='subject-note'>
                            {w_items}
                        </div>
                    </div>
                ) : ( <div /> )}

                { r_items.length ? (
                    <div className='subject'>
                        <div className='subject-name'>
                            Reti
                        </div>
                        
                        <div className='subject-note'>
                            {r_items}
                        </div>
                    </div>
                ) : ( <div /> )}

            </Sider>

            <Layout>
                <Header className='content-header'></Header>

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
