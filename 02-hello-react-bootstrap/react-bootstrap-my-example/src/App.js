import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from "./Home.js";
import {About} from "./About.js";
import {Contact} from "./Contact.js";
import {NoMatch} from "./NoMatch.js";

import {Layout} from "./components/Layout"
import {NavigationBar} from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
