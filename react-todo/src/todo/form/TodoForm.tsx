import React from 'react'
import Grid from '../../layout/grid/Grid'
import Button from '../../layout/button/Button'

interface Props {

}

const TodoForm = (props: Props) => {
    return (
        <div role='form' className='todoForm row'>
            <Grid cols='12 9 10'>
                <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" />
            </Grid>
            <Grid cols='12 3 2'>
                <Button styles='primary' icon='plus'></Button>
            </Grid>
        </div>
    )
}

export default TodoForm
