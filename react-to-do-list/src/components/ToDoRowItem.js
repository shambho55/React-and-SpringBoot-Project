function ToDoRowItem(props){
    return (

        <tr onClick={() => props.deleteToDo(props.rowNumber)}>
            <th scope='col'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>

    )

};


export default ToDoRowItem;