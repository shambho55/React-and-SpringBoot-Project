import React, { useState } from 'react';

export const NewToDoForm : React.FC <{
    addToDo:Function
}> = 
(props) => {

    const [assigned,setAssigned] = useState('');
    const [description,setDescription] = useState('');

    const submitToDo = () => {

        if(description !== '' && assigned !== ''){

            props.addToDo(description,assigned);
            setDescription('');
            setAssigned('');

        }

    }

    /*
    const descriptionChange = (event) => {

        console.log('description: ',event.target.value) ;
        setDescription(event.target.value);

    }

    const assignedChange = (event) => {

        console.log('assigned: ',event.target.value) ;
        setAssigned(event.target.value);

    }
    */

    return (

        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    required
                    onChange={(e) => setAssigned(e.target.value)}
                    value={assigned}></input>
                </div>
                <div>
                    <label className='form-label'>Description</label>
                    <textarea 
                    className='form-control' 
                    rows={3} 
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}>
                    </textarea>
                </div> 
                <button type='button' className='btn btn-primary' onClick={submitToDo}>Add To Do</button>
            </form>
        </div>

    )

}

