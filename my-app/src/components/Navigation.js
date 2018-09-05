import React from "react";
import NavLink from "react-router-dom/NavLink";

class Navigation extends React.Component{
    render() {
      return (
        <div>
          <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                    <span class="mdl-layout__title">Simple portfolio website</span>
                </span>
            </div>
            <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
                <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <NavLink class="mdl-navigation__link" exact to="/Portfolio">Portfolio</NavLink>
                    <NavLink class="mdl-navigation__link" exact to="/Blog">Blog</NavLink>
                    <NavLink class="mdl-navigation__link" exact to="/About">About</NavLink>
                    <NavLink class="mdl-navigation__link" exact to="/Contact">Contact</NavLink>
                </nav>
            </div>
        </header>
        </div>
      )
    }
  };
  
  export default Navigation;