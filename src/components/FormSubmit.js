import React, { Component } from "react";

class FormSumit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: 2 }}>
        <from action="" style={{ display: "flex" }}>
          <input type="text" style={{ flex: 9, height: 30 }} />
          <button style={{ height: 35, flex: 1 }}>
            <strong>Add to List</strong>
          </button>
        </from>
      </div>
    );
  }
}

export default FormSumit;
