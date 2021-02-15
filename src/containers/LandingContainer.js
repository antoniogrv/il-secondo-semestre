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

                    <p className="banter">
                        <strong>Non ti senti ispirato?</strong> <a target="_blank" href="https://web.unisa.it/uploads/rescue/233/14/domanda_di_rinuncia_agli_studi_2.3_2018.pdf">Scarica la rinuncia agli studi.</a><br />
                        <strong>Interessato al codice?</strong> Dai un’occhiata a <a target="_blank" href="https://github.com/v1enna/il-secondo-semestre">il-secondo-semestre@v1enna</a>
                    </p>

                    <p>
                        <a href='/il-secondo-semestre/notes'>
                            Notes
                        </a>
                    </p>
                </Content>
            </Layout>
        </div>
    )
}
