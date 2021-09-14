import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const IssueCard = (props) => {
  const { id, attributes } = props.issue;
  const { title, description, status, created_at } = attributes;

  return (
    <div className="item">
      <Link
        to={{ pathname: `/issues/${id}`, state: { issue: props.issue } }}
      >
        <div className="issue-card__title">{title}</div>
        <div className="issue-card__description">{description}</div>
        {
          status === "open" ? 
          <div className="ui blue label">{status}</div> : 
          <div className="ui red label">{status}</div>
        }
        <div className="ui label">{moment(created_at).format("DD/MM/YYYY - hh:mm A")}</div>
      </Link>

      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { issue: props.issue } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "#2185d0", marginTop: "7px" }}
        ></i>
      </Link>
      <Link
          to={{ pathname: `/issues/${id}`, state: { issue: props.issue } }}
        >
        <i className="info circle icon" 
          style={{ color: "green", marginTop: "8px", marginRight: "12px" }}
        ></i>
      </Link>
    </div>
  );
};

export default IssueCard;
