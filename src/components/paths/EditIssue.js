import React from "react";

class EditIssue extends React.Component {
  constructor(props) {
    super(props);
    const { title, description, status } = props.location.state.issue;
    this.state = {
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
            <select className="ui dropdown" onChange={(e) => this.setState({ status: parseInt(e.target.value) })}>
              <option value="" disabled selected>Select</option>
              <option value="0">Close</option>
              <option value="1">Open</option>
            </select>
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditIssue;
