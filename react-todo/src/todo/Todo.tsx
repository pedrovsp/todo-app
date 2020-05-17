import React, { Component, ChangeEvent } from 'react'
import { Header } from '../layout/header/Header';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';
import axios from 'axios';
interface TodoProps { }

const URL = 'http://localhost:3003/api/todos'
export class Todo extends Component {

    state: {
        description: string,
        list: []
    }

    constructor(props: TodoProps) {
        super(props);
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = (this.state.description);
        axios.post(URL, { description }).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <Header name='Todo' small='register'></Header>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}></TodoForm>
                <TodoList></TodoList>
            </div>);
    }
}