import React from "react";
import {TodoContext} from '../TodoContext/index';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoModalForm } from '../modals/CreateTodoModalForm';
import {CreateTodoButton} from './CreateTodoButton';
import { Modal } from "../modals/CreateTodoModal";
import {TodosError} from './TodosError';
import {TodosLoading} from './TodosLoading.js';
import {TodosEmpty} from './TodosEmpty';
import '../css/AppUI.css'

function AppUI(){
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch/>
        
        <TodoList className="container">
          {loading && <TodosLoading />}
          {error && <TodosError error={error} />}
          {(!loading && !searchedTodos.length) && <TodosEmpty />}
          {searchedTodos.map(todo =>(
            <TodoItem key={todo.id} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.id)} onDelete={() => deleteTodo(todo.id)}/>
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <CreateTodoModalForm />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal}/>
      </React.Fragment>
    );
}

export {AppUI};
