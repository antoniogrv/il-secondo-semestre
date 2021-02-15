import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import DefaultContainer from '../containers/DefaultContainer'
import '../sass/main.sass'

export default function NoteRouter() {
    const [note, setNote] = useState('./raw-notes/a-1.html');

    return (
        <Switch>
            <Route exact path='/notes/'>
                <a href="notes/a/1">as</a>
             </Route>

            <Route exact path='/notes/a/1'>
                Algoritmi 1
            </Route>

            <Route>
                <DefaultContainer error='@JSX_NoteRouting01' />
            </Route>
        </Switch>
    )
}
