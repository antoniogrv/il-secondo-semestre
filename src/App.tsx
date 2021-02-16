import React from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import LandingContainer from "./containers/LandingContainer";
import ContentContainer from "./containers/ContentContainer";
import FailureHandler from "./components/FailureHandler";

function App() {
    return (
        <HashRouter basename="/il-secondo-semestre/#/">
            <Switch>
                <Route exact path="/" component={LandingContainer} />

                <Route path="/notes" component={ContentContainer} />

                <Route
                    render={() => <FailureHandler error="@JSX_AppRouting" />}
                />
            </Switch>
        </HashRouter>
    );
}

export default App;
