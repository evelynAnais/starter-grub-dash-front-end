import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/starter-grub-dash-front-end">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
