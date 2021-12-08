const initialState = {
  todoList: [],
};

function todoReducer(state = initialState, action) {
  return {...state, todoList: action.todoList};
}

export default todoReducer;
