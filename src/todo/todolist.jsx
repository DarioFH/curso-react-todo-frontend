import React from 'react'
import IconButton from '../template/iconButton'
import If from '../template/if'

export default props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map((todo, i) => {
            return (
                <tr key={i}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>

                        <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}/>
                        <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}/>
                        <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done}/>




                        {/* <If test={todo.done == true} >
                            <div>
                                <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} />
                                <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
                            </div>
                        </If>
                        <If test={todo.done == false}>
                            <div>
                                <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} />
                            </div>
                        </If> */}

                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}