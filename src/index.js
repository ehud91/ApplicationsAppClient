import React from "react";
import { render } from "react-dom";
import "./index.css";
//import App from "./components/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/appStore";
import { loadApplications } from "./actions/applicationActions";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AppsPage from "./components/apps/AppsPage";
import "./styles/styles.css"; //Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();
store.dispatch(loadApplications());

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/apps" component={AppsPage} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
