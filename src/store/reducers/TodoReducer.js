import { SET_ADD_TODO, SET_HANDLE_CHECKBOX_CHECK } from "../actions/todo";
import update from "immutability-helper";
const initialState = {
  todos: [{ id: 1, name: "shopping", complete: false }]
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_TODO:
      let lastId = state.todos[state.todos.length - 1];
      return update(state, {
        todos: {
          $push: [{ id: lastId, name: action.payload, complete: false }]
        }
      });
    case SET_HANDLE_CHECKBOX_CHECK:
      return update(state, {
        todos: {
          [action.payload.index]: {
            complete: { $set: action.payload.complete }
          }
        }
      });
    default:
      return state;
  }
};

export default TodoReducer;
