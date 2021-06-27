import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import RandomFlag from "./quiz.jsx";
import history from "./history";
import App from "./App";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/play" component={RandomFlag} />
                </Switch>
            </Router>
        )
    }
}