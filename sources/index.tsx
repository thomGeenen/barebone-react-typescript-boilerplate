import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

import { SessionProvider } from '@/providers/Session';
import history from '@/providers/History';

import { Route, Router, Switch } from 'react-router-dom';

import { MainNavigator } from '@/pages';

export const App: FunctionComponent = () => {
    return (
        <div>
            <SessionProvider>
                <Router history={history}>
                    <Route path="/" component={MainNavigator} />
                </Router>
            </SessionProvider>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));