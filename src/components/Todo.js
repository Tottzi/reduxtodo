import { useDispatch } from 'react-redux';
import { delTodo, changeStatus} from '../features/todo/todo-slice'
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  const toggleTodoButton = todo.isActive ? 'todo__btn' : 'todo__btn todo__btn--done';
  const toggleTodoIcon = todo.isActive ? 'todo__btn__icon' : 'todo__btn__icon todo__btn__icon--done';
  const toggleTodoText = todo.isActive ? 'todo__article__text__title' : 'todo__article__text__title todo__article__text--done';
  const toggleTodoDesc = todo.isActive ? 'todo__article__text' : 'todo__article__text todo__article__text--done';
  const toggleTodoArticle = todo.isActive ? 'todo__article' : 'todo__article todo__article--done';
  const toggleTodo = todo.isActive ? 'todo' : 'todo todo--done';

  const onClickArticle = () => {
    dispatch(changeStatus(todo))
  };

  const onClickBtn = e => {
    const targetClassDone = /done/.test(e.target.className);
    if (targetClassDone) {
      return dispatch(delTodo(todo))
    }
    return onClickArticle();
  };

  const onClickIcon = () => dispatch(delTodo(todo));

  return (
    <section className={toggleTodo}>
      <article className={toggleTodoArticle} onClick={onClickArticle}>
        <h3 className={toggleTodoText}>{todo.title}</h3>
        <p className={toggleTodoDesc}>{todo.desc}</p>
      </article>
      <button
        className={toggleTodoButton}
        onClick={onClickBtn}>
        <FaTrashAlt
        className={toggleTodoIcon}
        onClick={onClickIcon}/>
      </button>
    </section>
  );
};

export default Todo;
