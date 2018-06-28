import React, { Component } from "react";
import HeadeComponent from "./components/HeaderComponent";
import FormSumit from "./components/FormSubmit";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      todos: [
        { id: 1, name: "Shopping", complete: false },
        { id: 2, name: "Swimming", complete: false },
        { id: 3, name: "Watch Movie", complete: false },
        { id: 4, name: "Dinner", complete: false },
        { id: 5, name: "DOTA", complete: false }
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumitForm = this.handleSumitForm.bind(this);
    this.handleCheckboxCheck = this.handleCheckboxCheck.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCheckboxCheck(index, complete) {
    let oldState = this.state.todos;
    oldState[index].complete = complete;
    this.setState({ todos: oldState });
  }

  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSumitForm(e) {
    e.preventDefault();
    let oldState = this.state.todos;
    let todoLength = this.state.todos.length;
    let lastId = this.state.todos[todoLength - 1].id;
    oldState.push({
      id: lastId + 1,
      name: this.state.message,
      complete: false
    });
    this.setState({ todos: oldState, message: "" });
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeadeComponent />
        <List
          handleCheckboxCheck={this.handleCheckboxCheck}
          todos={this.state.todos}
        />
        <FormSumit
          message={this.state.message}
          handleInputChange={this.handleInputChange}
          handleSumitForm={this.handleSumitForm}
        />
      </div>
    );
  }
}

export default App;
