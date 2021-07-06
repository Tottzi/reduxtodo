export const addTodo = todo => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    })
  }
}

export const delTodo = todo => {
  return (dispatch) => {
    dispatch({
      type: 'DEL_TODO',
      payload: todo
    })
  }
}

export const changeStatus = todo => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: todo
    })
  }
}