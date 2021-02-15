import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import DefaultContainer from '../containers/DefaultContainer'
import '../sass/main.sass'

export default function NoteRouter(props) {
    function createRoutes() {
        var routes = [];
        
        //console.log(props.notes.length);

        for(let i = 0; i < props.notes.length; i++) {
            console.log('Creating a route...');

            const note = props.notes[i];
            const path = '/notes/' + note.subject + '/' + note.id;

            routes.push(
                <Route 
                    key={i+1}
                    exacth 
                    path={path}
                >
                    <div dangerouslySetInnerHTML={{ __html: note.url }}></div>
                </Route>
            );
            console.log('Creating route <' + path + '> to path <' + path + '>');
        }

        routes.push(
            <Route key='0'>
                <DefaultContainer error='@JSX_NoteRouting_01' />
            </Route>
        )

        return routes;
    }

    const routes = createRoutes();

    return (
        <div>
            {routes}
        </div>
    )
}
