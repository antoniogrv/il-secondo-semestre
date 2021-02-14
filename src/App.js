import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingContainer from './containers/LandingContainer'
import ContentContainer from './containers/ContentContainer'
import DefaultContainer from './containers/DefaultContainer'

function App() {
    return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LandingContainer} />
				
				<Route path="/notes" component={ContentContainer} />

				<Route component={DefaultContainer} />
			</Switch>
		</BrowserRouter>
    );
}

export default App;
