export const todoActions = params => {
  try {
    return async dispatch => {
      if (params) {
        dispatch({
          type: params.type,
          todoList: params.todo,
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
