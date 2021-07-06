export const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return todos.map(todo => (todo.id === action.todo.id
        ? { ...todo, isActive: !todo.isActive }
        : todo));
    case 'DEL_TODO':
      return todos.filter(todo => todo.id !== action.todo.id);
    case 'ADD_TODO':
      return [...todos, action.todo];
    default:
      return todos;
  }
};

export default todoReducer;
