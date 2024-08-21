import {ToDoRowItem} from './ToDoRowItem';
import React from 'react';

export const ToDoTable : React.FC <{
    todos : ToDoModel[],deleteToDo:Function
}> = 
(props) => {

    return (

        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        Description
                    </th>
                    <th scope="col">
                        Assigned
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <ToDoRowItem 
                    key={todo.rowNumber}
                    rowNumber = {todo.rowNumber}
                    rowDescription = {todo.rowDescription}
                    rowAssigned = {todo.rowAssigned}
                    deleteToDo = {props.deleteToDo}/>
                ))}
            </tbody>
        </table>

    )

}
