import React from "react";
import { Link } from "react-router-dom";

class CreateIssue extends React.Component {
  state = {
    title: "",
    description: "",
    status: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "" || this.state.status === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addIssueHandler(this.state);
    this.setState({ title: "", description: "", status: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h2>Create New Issue</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea 
              rows="4"
              type="text"
              name="description"
              placeholder="Description of Issue"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Status</label>
            <select className="ui dropdown" onChange={(e) => this.setState({ status: e.target.value })}>
              <option value="" disabled selected>Select</option>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </select>
          </div>
          <button className="ui button blue">Add Issue</button>
          <Link to="/">
            <button className="ui button blue center">
              Back to Issue List
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateIssue;
