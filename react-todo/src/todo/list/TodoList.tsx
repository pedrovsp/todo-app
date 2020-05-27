import React from 'react'
import { TodoItem } from '../model/TodoItem.model'
import Button from '../../layout/button/Button';
import './TodoList.scss';
import { connect } from 'react-redux';
import { GlobalState } from '../../main/reducers';
import { removeTodo } from '../actions/listActions';

interface Props {
    list: TodoItem[],
    handleEdit: (item: TodoItem, event: boolean) => void;
    removeTodo: (_id: string) => void;
}

const TodoList = (props: Props) => {

    let listItems = (props.list || []).map((item: TodoItem, i) => {
        return (
            <tr key={i}>
                <td>{item._id.slice(-4)}</td>
                <td>{item.description}</td>
                <td>{item.createdAt}</td>
                <td>
                    <i className={'status fa fa-check-square ' + (item.done ? 'checked' : '')}
                        onClick={() => props.handleEdit(item, !item.done)}></i>
                </td>
                <td className='d-flex justify-content-between'>
                    <Button styles='danger' icon='trash' onClick={_ => props.removeTodo(item._id)}></Button>
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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    )

}

const mapStateToProps = (state: GlobalState) => ({
    list: state.list
})

function mapDispatchToProps(dispatch: any) {
    return {
        removeTodo: (_id: string) => {
            const action = removeTodo(_id)
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
