import React from "react";
import '../css/TodoCounter.css';
import { TodoContext } from '../TodoContext/index'

function TodoCounter(){
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">
            Has completado {completedTodos} de {totalTodos} tareas
        </h2>
    );
}

export {TodoCounter};