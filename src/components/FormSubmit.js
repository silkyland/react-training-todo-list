import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todo";

class FormSumit extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ message: e.target.value });
  }
  handleSubmitForm(e) {
    e.preventDefault();
    this.setState({ message: "" });
    this.props.addTodo(this.state.message);
  }
  render() {
    return (
      <div style={{ margin: 2 }}>
        <form onSubmit={this.handleSubmitForm} style={{ display: "flex" }}>
          <input
            type="text"
            onChange={this.handleInputChange}
            style={{ flex: 9, height: 30 }}
            value={this.state.message}
          />
          <button type="submit" style={{ height: 35, flex: 1 }}>
            <strong>Add to List</strong>
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  message: state.todos.message
});
const mapDispatchToProps = dispatch => ({
  addTodo: data => dispatch(addTodo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSumit);
