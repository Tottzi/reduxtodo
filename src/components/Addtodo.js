import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import '../style/Addtodo.scss';
import { addTodo } from '../features/todo/todo-slice'

const Addtodo = () => {
  const dispatch = useDispatch()
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (todoTitle && todoDesc) {
      const id = Math.random().toString(16).substr(2, 10);
      const todo = {
        id,
        title: todoTitle,
        desc: todoDesc,
        isActive: true,
      }
      dispatch(addTodo(todo))
      setTodoTitle('');
      setTodoDesc('');
    }
  };

  return (
    <section className='form_add__container'>
      <form className='form_add' onSubmit={onSubmit}>
        <article className='form_add__input'>
          <label htmlFor='title' className='form_add__label'>Title:</label>
          <input type='text' id='title'
          onChange={e => setTodoTitle(e.target.value)}
          value={todoTitle} className='form_add__input__title'
          placeholder='Type max 15 char.....'
          maxLength='15'
          required />
          <label htmlFor='desc' className='form_add__label'>Description:</label>
          <input type='text' id='desc'
          onChange={e => setTodoDesc(e.target.value)}
          value={todoDesc} className='form_add__input__desc'
          placeholder='Type max 45 char.....'
          maxLength='45'
          required />
        </article>
        <button className='form_add__btn'>
        <VscAdd className='form_add__btn__icon' />
        Add
        </button>
      </form>
    </section>
  );
};

export default Addtodo;
