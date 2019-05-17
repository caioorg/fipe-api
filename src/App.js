import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "./config/routes";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers.js";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import "./App.css";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, multi, promise)(createStore)(
  reducers,
  devTools
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
