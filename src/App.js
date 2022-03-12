import Todo from "./components/Todo";
import Form from "./components/Form";
import React, {useState} from "react";
import { nanoid } from "nanoid";
import { Container } from '@mui/material';

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks)

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }  
  const taskList = tasks.map(task => (
      <Todo id = {task.id} name = {task.name} completed = {task.completed} key = {task.id} 
        toggleTaskCompleted = {toggleTaskCompleted}
        deleteTask = {deleteTask}
        editTask = {editTask}
        />
    )
  );

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const tarefasRestantes = tasks.filter(task => id !== task.id);
    setTasks(tarefasRestantes);
  }

  function editTask(id, newName) {
    const tarefaParaEdicao = tasks.map(task => {
      if(id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(tarefaParaEdicao);
  }

  return (

    <div className="todoapp stack-large">
      <Container maxWidth = "xs" alignItems="center" justify="center" style={{backgroundColor:"skyblue", minheight: '100vh'}}>
        <h1 style={{textAlign: 'center'}}>Lista Todo</h1>
        <Form addTask={addTask}/>

        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
    </Container>
    </div>
  );
}
