import React from 'react'
import '../sass/main.sass'

export default function FailureHandler(props) {
    return (
        <div className='default-page'>
            Questa pagina non esiste.<br />
            <div>
                <strong>Errore:</strong> <span className="error-message">{props.error}</span>
            </div>
        </div>
    )
}
