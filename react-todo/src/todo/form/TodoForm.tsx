import React from 'react'
import Grid from '../../layout/grid/Grid'
import Button from '../../layout/button/Button'

interface Props {
    handleAdd: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    description: string;
}

const TodoForm = (props: Props) => {
    return (
        <div role='form' className='todoForm row'>
            <Grid cols='12 9 10'>
                <input type="text" id="description" className="form-control"
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <Button onClick={props.handleAdd} styles='primary' icon='plus'></Button>
            </Grid>
        </div>
    )
}

export default TodoForm
