import React, { Component } from "react";
import HeadeComponent from "./components/HeaderComponent";
import FormSumit from "./components/FormSubmit";
import List from "./components/List";

class App extends Component {
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
        <List />
        <FormSumit />
      </div>
    );
  }
}

export default App;
