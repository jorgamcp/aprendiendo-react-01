import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { getLastId, getTasksValues } from '../utils/MyUtils'

export default function TodoList(props) {

    const setTaskComplete = (value) => {
        props.setTaskComplete(value)
    }


    const editTask = (value, newdescr) => {
        console.log('TodoList.jsx -> Passing value from child todoitem to App parent ...')
        console.log('new Description ' + newdescr);
        props.editTask(value, newdescr);

    }
    const deleteTask = (value) => {
        console.log('TodoList.jsx -> Deleting task', value);
        props.deleteTask(value)
    }

    const [userInput, setUserInput] = useState('');
    const [errorInput, setErrorInput] = useState(false);

    const clearFields = (event) => {
        Array.from(event.target).forEach((e) => (e.value = ""))
    }


    const addNewTask = (e) => {
        e.preventDefault();
        if (userInput === '') {
            console.log('en blanco bro')
            setErrorInput(true);
        }
        else {
            console.log('Add task')
            console.log(props.tasks)
            props.setMyTasks([...props.tasks, { todo_id: getLastId(props.tasks) + 1, description: userInput, completed: getTasksValues(props.tasks) }]);
        }

        clearFields(e);
        setUserInput("");
    }

    return (
        <div>
            <h3>TodoList</h3>
            <div style={{ margin: '20px', display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <form>
                    <label>Enter a Task:</label>
                    <input value={userInput} style={{
                        width: '100%', textAlign: 'center', fontSize: '20px', fontFamily: 'Inter,Arial,serif'
                        , fontWeight: '100', margin: '20px', padding: '10px'
                    }} type={'text'} onChange={(e) => { setUserInput(e.target.value) }} onMouseEnter={(e) => { setErrorInput(false); }} />

                    {errorInput === true ? <p className='error'>Enter a valid value.</p> : <></>}

                    <button type='submit' style={{ backgroundColor: 'rgb(54, 87, 66)' }}
                        onClick={addNewTask}>Add Task</button>
                </form>

            </div>

            {
                props.tasks.length === 0 ? <p>No hay Tareas</p> :
                    <div style={{
                        display: 'grid', 'gridTemplateColumns': 'repeat(3,2fr)',
                        gridTemplateRows: 'repeat(3,1fr)', gap: '20px'
                    }}>
                        {



                            props.tasks.map((task, id) =>
                                <TodoItem
                                    key={id}
                                    task={task}
                                    setTaskComplete={setTaskComplete}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                />
                            )
                        }

                    </div>
            }





        </div>

    )
}
