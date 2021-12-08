export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const todoActions = params => {
  console.log('Params : ', params);
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
