import React, { Component } from 'react';
import { Menu } from '../layout/menu/Menu';
import { Routes } from './routes';

export class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Menu></Menu>
                    <Routes></Routes>
                </div>
            </React.Fragment>
        );
    }
}