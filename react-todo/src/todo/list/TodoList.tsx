import React from 'react'
import { TodoItem } from '../model/TodoItem.model'
import Button from '../../layout/button/Button';
import './TodoList.scss';

interface Props {
    list: [],
    handleEdit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (event: TodoItem) => void;
    handleCheck: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoList = (props: Props) => {

    let listItems = (props.list || []).map((item: TodoItem, i) => {
        return (
            <tr key={i}>
                <td>{i}</td>
                <td>{item.description}</td>
                <td>{item.createdAt}</td>
                <td>
                    <i className={'status fa fa-check-square ' + (item.done ? 'checked' : '')}></i>
                </td>
                <td className='d-flex justify-content-between'>
                    <Button styles='primary' icon='check-circle'
                        disabled={item.done} onClick={props.handleCheck}></Button>
                    <Button styles='secondary' icon='edit'
                        disabled={item.done} onClick={props.handleEdit}></Button>
                    <Button styles='danger' icon='trash' onClick={() => props.handleDelete(item)}></Button>
                </td>
            </tr >
        )
    });
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Created Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    )

}

export default TodoList
