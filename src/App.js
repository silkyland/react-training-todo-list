import React, { Component } from "react";

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
        <header
          style={{
            backgroundColor: "#e12c6a",
            marginTop: 0,
            padding: 2,
            paddingLeft: 20
          }}
        >
          <h1
            style={{
              color: "#fff",
              marginTop: 15,
              marginBottom: 15,
              fontSize: 25
            }}
          >
            TODO LIST ::
          </h1>
        </header>
        <div
          style={{
            padding: 2,
            height: 400,
            overflow: "scroll",
            overflowX: "hidden"
          }}
        >
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
        </div>
        <div style={{ margin: 2 }}>
          <from action="" style={{ display: "flex" }}>
            <input type="text" style={{ flex: 9, height: 30 }} />
            <button style={{ height: 35, flex: 1 }}>
              <strong>Add to List</strong>
            </button>
          </from>
        </div>
      </div>
    );
  }
}

export default App;
