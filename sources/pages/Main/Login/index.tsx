import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom';


export const LoginPage: FunctionComponent = () => {
    return (
        <div>
            <p>This is the login page</p>
            <Link to="/">Homepage</Link>
        </div>
    )
}