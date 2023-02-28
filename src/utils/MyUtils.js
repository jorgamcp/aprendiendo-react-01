export const getLastId = (objParam) => {
  if (typeof objParam === 'object' && objParam !== null) {
    try {

      const id = [...objParam].slice(-1)[0].todo_id === undefined ? 1 : [...objParam].slice(-1)[0].todo_id;


      return id;
    }
    catch (error) {
      console.log('error in getLastId Trace Id' + error)
      return 0;
    } 
  }
}

export const getTasksValues = (objParam) => {
  console.log(objParam);
  return objParam.filter(p => p.completed);
}


export const updateTaskDescription = (taskObjparam, index, newValueDescr) => {
  /*const indexToUpdate = taskObjparam.findIndex((i) => i.todo_id == taskObjparam);

  taskObjparam[indexToUpdate].description = newValueDescr;*/
  taskObjparam[index].description = newValueDescr;

  // console.log(taskObjparam);

  return taskObjparam;
}

export const deleteTaskUtil = (taskObjparam, index) => {

  const IndexToRemove = taskObjparam.findIndex((taskobj => taskobj.todo_id != index))


  const newTasks = taskObjparam.filter(p => p.todo_id !== index + 1);
  console.log(taskObjparam);
  return newTasks;

}