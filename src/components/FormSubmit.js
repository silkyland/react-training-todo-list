import React, { Component } from "react";

class FormSumit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumitForm = this.handleSumitForm.bind(this);
  }
  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSumitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div style={{ margin: 2 }}>
        <form onSubmit={this.handleSumitForm} style={{ display: "flex" }}>
          <input
            type="text"
            onChange={this.handleInputChange}
            style={{ flex: 9, height: 30 }}
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
