import { Layout, Button } from 'antd'
import React from 'react'
import '../sass/main.sass'

const { Content } = Layout;

class Note {
    constructor() {
        this.state = {
            id: null,
            subject: null,
            url: '/'
        }
    }
}

export default function LandingContainer() {
    var notes = [];

    async function fetchData() { 
        const response = await fetch('/');
        const phantomJSX = await response.text();
        const parser = document.createElement('html');

        parser.innerHTML = phantomJSX;
        const scraped = parser.getElementsByTagName('Note');

        for(let i = 0; i < scraped.length; i++) {
            let str = scraped[i].outerText;

            let id = str.split('-')[1].split('.')[0];
            let subject = str.split('-')[0];
            let url = '/static/raw-notes/' + str;

            notes[i] = {
                id: id,
                subject: subject,
                url: url
            }
        }  
    }

    fetchData().then(() => {
        console.log(notes.length); 
        for(let i = 0; i < notes.length; i++) {
            console.log(notes[i]);
        }
    });

    return (
        <div className="landing-page">
            <Layout>
                <Content className="landing-page-content">
                    <h1>
                        il-secondo-semestre
                    </h1>

                    <p className="tagline">
                        <em>What’s up, playa?</em> <strong>Appunti (G) è tornato</strong>, e fa più schifo di prima.
                    </p>

                    <p className="mission">
                        <strong>La peggiore guida noob-friendly sull’odissea verso il 18</strong> non è mai stata così interattiva e aggiornata!<br />
                        Dozzine di cinesi sono stati ingaggiati per produrre <strong>appunti all’avanguardia
                        per i corsi del secondo semestre</strong>, propro quelli che stai seguendo!<br /> 
                        Lascia perdere la sveglia alle 9, il caffè delle 9:15, 9:30, 10:00, 11:00 e via dicendo, 
                        <strong> adesso puoi dedicarti completamente al fancazzismo</strong>, <br />con minime (<em>sic</em>) ripercussioni!        
                    </p>

                    <div className="buttons">
                        <a href="/notes">
                            <div className="subject-button">
                                Algoritmi
                            </div>
                        </a>
                        <a href="/notes">
                            <div className="subject-button">
                                Reti
                            </div>
                        </a>
                        <a href="/notes">
                            <div className="subject-button">
                                Statistica
                            </div>
                        </a>
                        <a href="/notes">
                            <div className="subject-button">
                                TSW
                            </div>
                        </a>
                    </div>

                    <p className="banter">
                        <strong>Non ti senti ispirato?</strong> <a target="_blank" href="https://web.unisa.it/uploads/rescue/233/14/domanda_di_rinuncia_agli_studi_2.3_2018.pdf">Scarica la rinuncia agli studi.</a><br />
                        <strong>Interessato al codice?</strong> Dai un’occhiata a <a target="_blank" href="https://github.com/v1enna/il-secondo-semestre">il-secondo-semestre@v1enna</a>
                    </p>
                </Content>
            </Layout>
        </div>
    )
}
