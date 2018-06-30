export const SET_ADD_TODO = "SET_ADD_TODO";
export const SET_HANDLE_CHECKBOX_CHECK = "SET_HANDLE_CHECKBOX_CHECK";

export const handleCheckboxCheck = data => ({
  type: SET_HANDLE_CHECKBOX_CHECK,
  payload: data
});

export const addTodo = data => ({
  type: SET_ADD_TODO,
  payload: data
});
