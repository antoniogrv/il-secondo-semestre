import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../sass/main.sass'

export default function NoteRouter() {
    const [note, setNote] = useState('./raw-notes/a-1.html');

    return (
        <Switch>
            <Route path='/notes/a/1'>
                404
            </Route>

            <Route path='notes/a/1' >
                5'5
            </Route>
        </Switch>
    )
}
