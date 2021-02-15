import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import LandingContainer from './containers/LandingContainer'
import ContentContainer from './containers/ContentContainer'
import FailureHandler from './components/FailureHandler'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/il-secondo-semestre/" component={LandingContainer} />
                    
                <Route exact path="/il-secondo-semestre/notes" component={ContentContainer} />

                <Route render={() => <FailureHandler error='@JSX_AppRouting' />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
