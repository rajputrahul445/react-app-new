import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import Navigation from "./components/Navigation"
import Bottom from "./components/Bottom"
import Portfolio from "./components/Portfolio"
import Blog from "./components/Blog"
import About from "./components/About"
import Contact from "./components/Contact"

class App extends React.Component{
  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Router>
          <Navigation />
        </Router>
        <Portfolio />
        <Blog />
        <About />
        <Contact />
        <Bottom />
      </div>
    )
  }
};

export default App;
