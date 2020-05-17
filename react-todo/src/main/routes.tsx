import React, { FunctionComponent } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import { Todo } from '../todo/Todo';
import { About } from '../about/About';

export interface RoutesProps { }
const history = createBrowserHistory();
export const Routes: FunctionComponent<RoutesProps> = (props: RoutesProps) => {
    return (
        <Router history={history}>
            <Route path='/todos' component={Todo}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='*' to='/todos'></Route>
        </Router >
    );
}