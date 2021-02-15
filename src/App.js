import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import LandingContainer from './containers/LandingContainer'
import ContentContainer from './containers/ContentContainer'
import DefaultContainer from './containers/DefaultContainer'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingContainer} />
                    
                <Route path="/notes" component={ContentContainer} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
