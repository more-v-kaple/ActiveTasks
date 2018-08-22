import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
        <div className="verticalAlign column">
            <p className="title">
                Oops, page not found!
            </p>
            <Link to="/">Return to Home Page</Link>
        </div>
);

export default PageNotFound;
