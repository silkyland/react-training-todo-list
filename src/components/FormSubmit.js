import React, { Component } from "react";

class FormSumit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: 2 }}>
        <form onSubmit={this.props.handleSumitForm} style={{ display: "flex" }}>
          <input
            type="text"
            onChange={this.props.handleInputChange}
            style={{ flex: 9, height: 30 }}
            value={this.props.message}
          />
          <button type="submit" style={{ height: 35, flex: 1 }}>
            <strong>Add to List</strong>
          </button>
        </form>
      </div>
    );
  }
}

export default FormSumit;
