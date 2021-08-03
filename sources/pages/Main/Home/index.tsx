import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: FunctionComponent = () => {
    return (
        <div>
            <p>This is homepage</p>

            <Link to="/login">To login page</Link>
        </div>
    )
}