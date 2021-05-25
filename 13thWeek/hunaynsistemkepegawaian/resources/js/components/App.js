import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import KepegawaianIndex from "./KepegawaianIndex";
import KepegawaianCreate from "./KepegawaianCreate";
import KepegawaianShow from "./KepegawaianShow";
import KepegawaianEdit from "./KepegawaianEdit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={KepegawaianIndex} />
                        <Route
                            exact
                            path="/create"
                            component={KepegawaianCreate}
                        />
                        <Route
                            path="/kepegawaian/edit/:id"
                            component={KepegawaianEdit}
                        />
                        <Route
                            path="/kepegawaian/:id"
                            component={KepegawaianShow}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
