import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
  const todosRedux = useSelector(state => state.todoSlice.entities)

// without redux
// const Todos = ({ todos, dispatchTodo }) => {
//     return (
//         <div className='todos'>
//           {todos.length > 0
//             ? todos.map(todo => (
//             <Todo key={todo.id} todo={todo}
//             dispatchTodo={dispatchTodo} />))
//             : <h3 style={{ textAlign: 'center' }}>There is no ToDo for today</h3>}
//         </div>
// )
  return (
    <div className='todos'>
      {todosRedux.length > 0
        ? todosRedux.map(todo => (
        <Todo key={todo.id} todo={todo}
        />))
        : <h3 style={{ textAlign: 'center' }}>There is no ToDo for today</h3>}
    </div>
  )

};

export default Todos;
