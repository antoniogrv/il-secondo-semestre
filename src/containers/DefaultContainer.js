import React from 'react'
import '../sass/main.sass'

export default function DefaultContainer() {
    return (
        <div className='default-page'>
            Questa pagina non esiste.<br />
            <div>
                <strong>Codice errore:</strong> <span className="error-message">@Routing_01</span>
            </div>
        </div>
    )
}
