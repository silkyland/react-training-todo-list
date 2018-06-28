import React, { Component } from "react";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "Shopping", complete: false },
        { id: 2, name: "Swimming", complete: false },
        { id: 3, name: "Watch Movie", complete: false },
        { id: 4, name: "Dinner", complete: false },
        { id: 5, name: "DOTA", complete: false }
      ]
    };
  }

  handleCheckboxCheck(index, complete) {
    let oldState = this.state.todos;
    oldState[index].complete = complete;
    this.setState({ todos: oldState });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.todos.map((todo, index) => (
          <div
            style={{
              backgroundColor: "#fefefe",
              borderColor: "#ccc",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              margin: 2,
              padding: 5,
              paddingTop: 10,
              paddingBottom: 19
            }}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => this.handleCheckboxCheck(index, !todo.complete)}
            />{" "}
            {!todo.complete ? todo.name : <s> {todo.name}</s>}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ListItems;
