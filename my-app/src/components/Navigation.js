import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component{
    render() {
      return (
        <div>
          <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div className="mdl-layout__header-row portfolio-logo-row">
                <NavLink className="mdl-navigation__link" exact to="/">
                    <span className="mdl-layout__title">
                        <div className="portfolio-logo">
                            <img src={window.location.origin + '/images/logo.png'} />
                        </div>
                        <span className="mdl-layout__title">Simple portfolio website</span>
                    </span>
                </NavLink>
            </div>
            <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
           
                <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
              
                    <NavLink className="mdl-navigation__link" exact to="/Portfolio">Portfolio</NavLink>
                    <NavLink className="mdl-navigation__link" exact to="/Blog">Blog</NavLink>
                    <NavLink className="mdl-navigation__link" exact to="/About">About</NavLink>
                    <NavLink className="mdl-navigation__link" exact to="/Contact">Contact</NavLink>
               
                </nav>
            </div>
        </header>
        </div>
      )
    }
  };
  
  export default Navigation;