import React, { Component } from "react";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
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
        >
          <input type="checkbox" checked /> <s> Shopping</s>
        </div>
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
        >
          <input type="checkbox" /> Swimming
        </div>
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
        >
          <input type="checkbox" /> Watch Movie
        </div>
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
        >
          <input type="checkbox" /> Dinner
        </div>
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
        >
          <input type="checkbox" /> DOTA
        </div>
      </React.Fragment>
    );
  }
}

export default ListItems;
