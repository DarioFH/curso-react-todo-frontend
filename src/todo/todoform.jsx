import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => {
    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10" >

                <input 
                id="description" 
                className="form-control" 
                value={props.description} 
                onChange={props.handleChange} 
                placeholder="Adicione uma tarefa"
                />

            </Grid>

            <Grid cols="12 3 2" >

                <IconButton 
                style="success" 
                icon="plus" 
                onClick={props.handleAdd}
                />
                
            </Grid>
            
        </div>
    )
}