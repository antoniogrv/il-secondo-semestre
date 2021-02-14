import React from 'react'
import '../sass/main.sass'

export default function DefaultContainer() {
    return (
        <div className='default-page'>
            Questa pagina non esiste.<br />
            <div>
                <strong>Errore:</strong> <span className="error-message">@JSX Routing</span>
            </div>
        </div>
    )
}
