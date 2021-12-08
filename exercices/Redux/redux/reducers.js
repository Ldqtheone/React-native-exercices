const initialState = {
  todoList: [],
};

function todoReducer(state = initialState, action) {
  console.log('Action Todolist: ', action);
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todoList: action.todoList};
    case 'REMOVE_TODO':
      return {...state, todoList: action.todoList};
    default:
      return state;
  }
}

export default todoReducer;
