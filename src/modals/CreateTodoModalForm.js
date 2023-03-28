import React from 'react';
import { TodoContext } from '../TodoContext/index';
import './CreateTodoModalForm.css';

function CreateTodoModalForm(){
    const {addTodo, setOpenModal } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    const onCancel = () =>{
        setOpenModal(false);
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        if(newTodoValue){
            addTodo(newTodoValue)
        }
        setOpenModal(false);
    }
    
    
    return(

<form onSubmit={onSubmit} >
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>

    )
}

export {CreateTodoModalForm};