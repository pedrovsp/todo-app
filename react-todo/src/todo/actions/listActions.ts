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
    const request = axios.post(URL, { description });
    return {
        type: TODO_ADD,
        payload: request
    }
}

export const removeTodo = (_id: string) => {
    const request = axios.delete(URL + `/${_id}`);
    return {
        type: TODO_REMOVE,
        payload: request
    }
}