import React, { useEffect } from 'react'
import Grid from '../../layout/grid/Grid'
import Button from '../../layout/button/Button'
import './TodoForm.scss'
import { connect } from 'react-redux'
import { GlobalState } from '../../main/reducers'
import { changeDescription } from '../actions/descriptionActions'
import { searchTodo, addTodo } from '../actions/listActions'

interface Props {
    addTodo: (value: string) => void;
    searchTodo: (value: string) => void;
    changeDescriptionValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    description: string;
}

const TodoForm = (props: Props) => {

    useEffect(() => {
        props.searchTodo(props.description)
    }, [])

    return (
        <div role='form' className='todo-form row'>
            <Grid cols='12 9 10'>
                <input type="text" id="description" className="form-control"
                    placeholder="Adicione uma tarefa"
                    onChange={props.changeDescriptionValue}
                    value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <Button onClick={_ => props.addTodo(props.description)} styles='primary' icon='plus'></Button>
                <Button onClick={_ => props.searchTodo(props.description)} styles='primary' icon='search'></Button>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state: GlobalState) => ({
    description: state.description
})

function mapDispatchToProps(dispatch: any) {
    return {
        changeDescriptionValue: (value: React.ChangeEvent<HTMLInputElement>) => {
            const action = changeDescription(value.target.value);
            dispatch(action);
        },
        searchTodo: (description: string) => {
            const action = searchTodo(description)
            dispatch(action);
        },
        addTodo: (description: string) => {
            const action = addTodo(description)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)