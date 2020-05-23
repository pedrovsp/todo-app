import React, { Component, ChangeEvent } from 'react'
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
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`).then(resp => {
            console.log(resp);
            this.setState({ ...this.state, description: '', list: [...resp.data] })
        })
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = (this.state.description);
        axios.post(URL, { description }).then(res => {
            this.refresh();
        });
    }

    handleEdit(item: TodoItem, check?: boolean) {
        if (check !== undefined) item.done = check;
        axios.put(URL + `/${item._id}`, item).then(res => {
            this.refresh();
        });
    }

    handleDelete(item: TodoItem) {
        axios.delete(URL + `/${item._id}`).then(res => {
            this.refresh();
        });
    }

    handleSearch() {
        const description = (this.state.description);
        axios.get(URL, { params: { description__regex: `${description}` } }).then(res => {
            this.setState({ ...this.state, description: '', list: [...res.data] })
        });
    }

    render() {
        return (
            <div>
                <Header name='Todo' small='register'></Header>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleAdd={this.handleAdd}></TodoForm>
                <TodoList list={this.state.list}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}></TodoList>
            </div>);
    }
}