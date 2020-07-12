import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { configureStore } from "./store";
import { App } from "./containers/App";
import { Details } from "./containers/Details";
import { Search } from "./containers/Search";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/details/:user_id" component={Details} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
