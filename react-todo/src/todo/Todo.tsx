import React, { Component } from 'react'
import { Header } from '../layout/header/Header';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';
interface TodoProps { }

export class Todo extends Component {
    render() {
        return (
            <div>
                <Header name='Todo' small='register'></Header>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </div>);
    }
}