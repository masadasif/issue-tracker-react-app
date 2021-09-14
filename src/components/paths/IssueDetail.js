import React from "react";
import { Link } from "react-router-dom";

const IssueDetail = (props) => {
  const { attributes } = props.location.state.issue;
  const { title, description, status } = attributes;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{description}</div>
          <div className="status">{status}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Issue List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IssueDetail;
