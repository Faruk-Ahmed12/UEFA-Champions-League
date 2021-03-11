import React from 'react';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="container">
            <div className="not-found-content">
                <h1 className="notFound"><span>4</span>0<span>4</span></h1>
            <h3><span>Oops!</span> Page not found</h3>
            <p>we are sorry, but the page you requested was not found!!!</p>
            </div>
        </div>
    );
};

export default NoMatch;