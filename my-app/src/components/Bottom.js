import React from "react";
import { NavLink } from "react-router-dom";

class Bottom extends React.Component{
  render() {
    return (
        <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__left-section">
                <div className="mdl-logo">Simple portfolio website</div>
            </div>
            <div className="mdl-mini-footer__right-section">
                <ul className="mdl-mini-footer__link-list">
                    <li><NavLink className="mdl-navigation__link" exact to="/About">About</NavLink></li>
                    <li><NavLink className="mdl-navigation__link" exact to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </footer>
    )
  }
};

export default Bottom;