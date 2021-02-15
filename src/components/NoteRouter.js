import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FailureHandler from './FailureHandler'
import '../sass/main.sass'

export default function NoteRouter(props) {
    function createRoutes() {
        var routes = [];

        for(let i = 0; i < props.notes.length; i++) {
            const note = props.notes[i];
            const path = '/notes/' + note.subject + '/' + note.id;
            const fileName = note.subject + '-' + note.id;

            routes.push(
                <Route 
                    key={i+1}
                    path={path}
                >
                    <div dangerouslySetInnerHTML={{ __html: require('../static/raw-notes/' + fileName + '.js') }}></div>
                </Route>
            );
            console.log('Creating route <' + path + '> to path <' + path + '>');
        }

        routes.push(
            <Route key='0'>
                <FailureHandler error='@JSX_NotesRouting' />
            </Route>
        )

        return routes;
    }

    return (
        <Switch>
            {createRoutes()}
        </Switch>
    )
}
