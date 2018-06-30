import React, { Component } from "react";
import HeadeComponent from "./components/HeaderComponent";
import FormSumit from "./components/FormSubmit";
import List from "./components/List";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // axios.get("http://localhost:8080/todos").then(response => {
    //   this.setState({ todos: response.data });
    // });
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
        <List />
        <FormSumit />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
