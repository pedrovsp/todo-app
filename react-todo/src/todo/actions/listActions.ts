import axios from 'axios';
const URL = 'http://localhost:3003/api/todos';

export const TODO_SEARCH = 'TODO_SEARCH';
export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';

export const searchTodo = (description: string) => {
    const request = axios.get(URL, { params: { description__regex: `${description}`, sort: '-createdAt' } })
    return {
        type: TODO_SEARCH,
        payload: request
    }
}

export const addTodo = (description: string) => {
    return (dispatch: any) => {
        axios.post(URL, { description }).then(res => dispatch({
            type: TODO_ADD,
            payload: res
        })).then(res => {
            dispatch(searchTodo(''))
        });
    }
}

export const removeTodo = (_id: string) => {
    return (dispatch: any) => {
        axios.delete(URL + `/${_id}`).then(res => dispatch({
            type: TODO_REMOVE,
            payload: res
        })).then(res => {
            dispatch(searchTodo(''))
        });
    }
}