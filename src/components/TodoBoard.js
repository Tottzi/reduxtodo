import Addtodo from './Addtodo';
import Todos from './Todos';
import Footer from './layouts/Footer';

const TodoBoard = ({ todos, dispatchTodo }) => (
    <div className='todoBoard'>
      <Addtodo dispatchTodo={dispatchTodo} />
      <Todos todos={todos}
      dispatchTodo={dispatchTodo} />
      <Footer />
    </div>
);

export default TodoBoard;
