import React from 'react';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './TodoContext/index';

/*const defaultTodos = [
  {id: 1,text: 'Cortar Cebolla', completed: true},
  {id: 2,text: 'Cortar Morron', completed: false},
  {id: 3,text: 'Cortar Ajo', completed: false},
  {id: 4,text: 'Cortar Remolacha', completed: true},
  {id: 5,text: 'ABCDEFG 123', completed: false},
  {id: 6,text: 'ABCDEFG 456', completed: false},
];*/

function App() {
  return (
    <TodoProvider>
          <AppUI />
    </TodoProvider>
  );
}

export default App;
