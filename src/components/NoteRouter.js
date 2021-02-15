import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
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
                    exact
                    path={path}
                    render={() => 
                        <div dangerouslySetInnerHTML={{ __html: require('../static/raw-notes/' + fileName + '.js') }}></div>
                    } 
                />
            );

            console.log('Creating route: ' + path);
        }

        return routes;
    }

    return (
        <HashRouter basename='/il-secondo-semestre/#/'>
            <Switch>
                {createRoutes()}

                <Route render={() => <FailureHandler error='@JSX_AppRouting3' />} />
            </Switch>
        </HashRouter>
    )
}
