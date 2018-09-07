import React from "react";
import { NavLink } from "react-router-dom";



class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading">
                <img className="article-image" src={window.location.origin + '/images/loading.svg'} border="0" alt="" />
            </div>;
        } else {
            return (
            <div className="mdl-grid portfolio-max-width">
                {items.map(item => (
                <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card" key={item.id}>
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{item.title}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {item.body}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <NavLink className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" to="/">Read more</NavLink>
                    </div>
                </div>
                ))}
            </div>
            );
        }
    }
};

export default Portfolio;