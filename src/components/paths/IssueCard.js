import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/issue.png";

const IssueCard = (props) => {
  const { id, attributes } = props.issue;
  const { title, description, status } = attributes;

  return (
    <div className="item">
      <img className="ui avatar image" src={Img} alt="Img" style={{ marginTop: "12px" }}/>
      <div className="content">
        <Link
          to={{ pathname: `/issues/${id}`, state: { issue: props.issue } }}
        >
          <div className="header">{title}</div>
          <div>{description}</div>
          <div>{status}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { issue: props.issue } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default IssueCard;
