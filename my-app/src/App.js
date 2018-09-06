import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

import Navigation from "./components/Navigation";
import Bottom from "./components/Bottom";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends React.Component{
  render() {
    return (
      <Router>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Navigation />
        <main className="mdl-layout__content">
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          <Bottom />
        </main>
    </div>
    </Router>
    )
  }
};

export default App;
