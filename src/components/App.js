import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import List from "./paths/List";
import Header from "./header/Header";
import history from "../history";
import Create from "./paths/Create";
import Edit from "./paths/Edit";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={List} />
                        <Route path="/create" component={Create} />
                        <Route path="/edit/:id" component={Edit} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
