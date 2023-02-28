import React, { useState } from 'react'

export default function TodoItem({ task, id, setTaskComplete,editTask,deleteTask }) {

    const [isComplete, setIsComplete] = useState(false);

    const [isEditingTask,setIsEditingTask] = useState(false);

    const [description,setDescription] = useState(task.description);

    const editItemTask = () => {
        console.log('TodoItem.jsx -> Clic edit ' + task.todo_id);
        setIsEditingTask(!isEditingTask);
        editTask(task.todo_id,description)
    }

    const deleteItemTask = () => {
        console.log('Deleting Task -> ' + task.todo_id)
        deleteTask(task.todo_id);
    }

    return (
        <div style={{ borderRadius: '10px', padding: '25px', backgroundColor: '#141414' }}>
            <p>Id: {task.todo_id}</p>


            {
                isEditingTask === true ? 
                <div>
                    <input type={'text'} value={description} onChange={(e) => {
                            setDescription(e.target.value);
                    }} /> 
                    <button id='update-btn' onClick={editItemTask}>Update Task</button>    
                </div>
                : <p >{task.description}</p>
            }

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    isComplete === false ? <p>⌛Not Complete. In progress...</p> : <p>✔Task Complete!</p>
                }

                <input type="checkbox" onClick={(e) => {
                    console.log('click en el checkbox ' + task.todo_id)
                    setIsComplete(!isComplete)
                    setTaskComplete(!isComplete)
                }} />
            </div>
            <div className='container-actions'>
                {
                    isEditingTask === false ? <button id='edit-button' onClick={editItemTask}>Edit Task</button> : <></>
                }
                <button id='del-button' onClick={deleteItemTask}>Delete Task</button>
            </div>

        </div>
    )
}
