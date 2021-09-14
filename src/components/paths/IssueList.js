import React from "react";
import { Link } from "react-router-dom";
import IssueCard from "./IssueCard";

const IssueList = (props) => {
  const deleteIssueHandler = (id) => {
    props.getIssueId(id);
  };
  
  const renderIssueList = props.issues.map((issue) => {
    return (
      <IssueCard
      issue={issue}
        clickHandler={deleteIssueHandler}
        key={issue.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Issues List
        <Link to="/add">
          <button className="ui button blue right">Create Issue</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderIssueList}</div>
    </div>
  );
};

export default IssueList;
