import React, { Component } from 'react';
import { Todo } from '../todo/Todo';

export class App extends Component {
    render() {
        return (
            <div className="container">
                <Todo></Todo>
            </div>
        );
    }
}