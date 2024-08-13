function ToDoRowItem(props){
    return (

        <tr>
            <th scope='col'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>

    )

};


export default ToDoRowItem;