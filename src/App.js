import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { Entities } from "./pages/entities";
import { Layout } from "./components/layout"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/entities">
            <Entities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
