import React, { useState } from "react";
import Button from '@mui/material/Button';

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Editando a tarefa... {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" 
          value = {newName}
          onChange = {handleChange}
        />
      </div>
      <div className="btn-group">
        <Button type="button" className="btn todo-cancel" variant="contained"
          onClick={() => setEditing(false)}>
          Cancelar
        </Button>
        <Button type="submit" className="btn btn__primary todo-edit" variant="contained">
          Salvar
        </Button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small" style={{alignItems: 'center', justifyItems: 'center'}}>
      <div className="c-cb" style={{alignItems: 'center', justifyItems: 'center'}}>
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <Button type="button" className="btn" variant="contained"
            onClick={() => setEditing(true)}>
            Editar
          </Button>
          <Button
            type="button"
            className="btn btn__danger" variant="contained"
            onClick={() => props.deleteTask(props.id)}>
            Deletar
          </Button>
        </div>
    </div>
  );
  
    return (
        <li className="todo">
          {isEditing ? editingTemplate : viewTemplate}
        </li>
    );
}