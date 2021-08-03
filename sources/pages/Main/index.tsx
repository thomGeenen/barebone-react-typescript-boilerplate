import React, { FunctionComponent } from 'react';
import { Switch, Router, Route, withRouter } from 'react-router-dom';
import history from '@/providers/History';

import { HomePage } from './Home';
import { LoginPage } from './Login';

export const MainNavigator: FunctionComponent = ({}) => {
    return (
        <Router history={history} basename="/" forceRefresh={true}>
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route exact path="/login" component={withRouter(LoginPage)} />
        </Router>
    )
}