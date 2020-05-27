import React, { Component } from 'react'
import { Header } from '../layout/header/Header';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';
import axios from 'axios';
import { TodoItem } from './model/TodoItem.model';
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
        this.handleEdit = this.handleEdit.bind(this);
    }
    refresh() {
        axios.get(`${URL}?sort=-createdAt`).then(resp => {
            console.log(resp);
            this.setState({ ...this.state, description: '', list: [...resp.data] })
        })
    }

    handleEdit(item: TodoItem, check?: boolean) {
        if (check !== undefined) item.done = check;
        axios.put(URL + `/${item._id}`, item).then(res => {
            this.refresh();
        });
    }

    render() {
        return (
            <div>
                <Header name='Todo' small='register'></Header>
                <TodoForm></TodoForm>
                <TodoList
                    handleEdit={this.handleEdit}></TodoList>
            </div>);
    }
}