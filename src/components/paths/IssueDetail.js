import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const IssueDetail = (props) => {
  const { attributes } = props.location.state.issue;
  const { title, description, status, created_at } = attributes;
  return (
    <div className="main">
      <div className="ui card centered padding">
        <div className="content">
          <h2>Title: {title}</h2>
          <div><b>Description:</b> {description}</div>
          <br></br>
          {
            status === "open" ? 
            <div className="ui blue label">{status}</div> : 
            <div className="ui red label">{status}</div>
          }
          <div className="ui label">{moment(created_at).format("DD/MM/YYYY - hh:mm A")}</div>
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
