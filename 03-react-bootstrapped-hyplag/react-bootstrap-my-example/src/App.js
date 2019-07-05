import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from "./pages/Home.js";
import {About} from "./pages/About.js";
import {Contact} from "./pages/Contact.js";
import {NoMatch} from "./pages/NoMatch.js";

import {Layout} from "./components/Layout"
import {NavigationBar} from "./components/NavigationBar";

import {Jumbotron} from "./components/Jumbotron";
//<Jumbotron/>

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar/>
        <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
