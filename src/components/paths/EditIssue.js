import React from "react";
import { Link } from "react-router-dom";

class EditIssue extends React.Component {
  constructor(props) {
    super(props);
    const { id, attributes } = props.location.state.issue;
    const { title, description, status } = attributes;
    this.state = {
      id,
      title,
      description,
      status,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "" | this.state.status === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateIssueHandler(this.state);
    this.setState({ title: "", description: "", status: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Issue</h2>
        <form className="ui form" onSubmit={this.update}>
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
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Status</label>
            <select className="ui dropdown" value={this.state.status} onChange={(e) => this.setState({ status: e.target.value })}>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </select>
          </div>
          <button className="ui button blue">Update</button>
          <Link to="/">
            <button className="ui button blue center">
              Back to Issue List
            </button>
          </Link>
         
        </form>
        <div className="center-div">
        
      </div>
      </div>
      
    );
  }
}

export default EditIssue;
