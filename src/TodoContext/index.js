import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import uuid from 'react-uuid';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false)
    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);

        const newTodos = [...todos];
        if (newTodos[todoIndex].completed) {
            newTodos[todoIndex].completed = false;
        } else {
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            id: uuid(),
            completed: false,
            text,
        })
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);

        saveTodos(newTodos);
    };

    return ( 
        <TodoContext.Provider value = {{ 
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}> 
            {props.children} 
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}