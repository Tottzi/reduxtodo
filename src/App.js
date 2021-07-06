import { useReducer, useEffect } from 'react';
import './style/App.scss';
import TodoBoard from './components/TodoBoard';
import { todoReducer } from './components/reducers/todoReducer';


const localTodo = localStorage.getItem('saltTodo') ? JSON.parse(localStorage.getItem('saltTodo')) : [];

function App() {
  const [todos, dispatchTodo] = useReducer(todoReducer, localTodo);

  useEffect(() => {
    localStorage.setItem('saltTodo', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <TodoBoard todos={todos} dispatchTodo={dispatchTodo} />
    </div>
  );
}

export default App;
