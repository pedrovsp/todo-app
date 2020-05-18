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
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    handleCheck() {
        console.log('Check')
        // const description = (this.state.description);
        // axios.post(URL, { description }).then(res => {
        //     this.refresh();
        // });
    }

    handleEdit() {
        console.log('edit')
        // const description = (this.state.description);
        // axios.post(URL, { description }).then(res => {
        //     this.refresh();
        // });
    }

    handleDelete() {
        console.log('Delete')
        // axios.delete(URL + `/${id}`).then(res => {
        //     this.refresh();
        // });
    }

    render() {
        return (
            <div>
                <Header name='Todo' small='register'></Header>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}></TodoForm>
                <TodoList list={this.state.list}
                    handleCheck={this.handleCheck}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}></TodoList>
            </div>);
    }
}