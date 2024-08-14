import React from 'react';

function NewToDoForm(){

    return (

        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text' className='form-control' required></input>
                </div>
                <div>
                    <label className='form-label'>Description</label>
                    <textarea className='form-control' rows={3} required></textarea>
                </div> 
                <button type='button' className='btn btn-primary'>Add To Do</button>
            </form>
        </div>

    )

}

export default NewToDoForm;