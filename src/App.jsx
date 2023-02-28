
import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import TodoList from './components/TodoList'
import tasks from './tasks.json'
import { FaReact } from 'react-icons/fa'
import { updateTaskDescription, deleteTaskUtil } from './utils/MyUtils'

function App() {

  const [mytasks, setMyTasks] = useState([])

  const setTaskComplete = (value) => {
    console.log('quieres completar una tarea')
    console.log('esto vale ' + value)

  } 

  const editTask = (value, newdescr) => {
    console.log('Editing task on APP.JSX -> ' + value);
    setMyTasks(updateTaskDescription(mytasks, value - 1, newdescr));
    console.log(mytasks);
  }

  const deleteTask = (value) => {
    console.log('Deleting Task on APP.JSX -> ' + value);
    setMyTasks(deleteTaskUtil(mytasks, value -1 ))
    console.log(mytasks);
  }

  useEffect(() => {
    setMyTasks(tasks);
    console.log(tasks)
  }, [tasks])






  return (
    <div>
      <header>
        <FaReact size={150} />
        <h1>My React TodoApp with Vite</h1>
      </header>
      <TodoList tasks={mytasks} setTaskComplete={setTaskComplete} setMyTasks={setMyTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>)
}

export default App
