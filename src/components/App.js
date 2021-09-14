import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/api";
import "./App.css";
import Header from "./Header";
import CreateIssue from "./paths/CreateIssue";
import IssueList from "./paths/IssueList";
import IssueDetail from "./paths/IssueDetail";
import EditIssue from "./paths/EditIssue";

function App() {
  const [issues, setIssues] = useState([]);

  const retrieveIssues = async () => {
    const response = await api.get("/issues");
    return response.data.data;
  };

  const addIssueHandler = async (issue) => {
    const request = {
      ...issue,
    };

    const response = await api.post("/issues", request);
    setIssues([...issues, response.data.data]);
  };

  const updateIssueHandler = async (issue) => {
    const response = await api.put(`/issues/${issue.id}`, issue);
    const { id } = response.data.data;
    setIssues(
      issues.map((issue) => {
        return issue.id === id ? { ...response.data.data } : issue;
      })
    );
  };

  const removeIssueHandler = async (id) => {
    await api.delete(`/issues/${id}`);
    const newIssueList = issues.filter((issue) => {
      return issue.id !== id;
    });

    setIssues(newIssueList);
  };

  useEffect(() => {
    const getAllIssues = async () => {
      const allIssues = await retrieveIssues();
      if (allIssues) setIssues(allIssues);
    };

    getAllIssues();
  }, []);

  useEffect(() => {
  }, [issues]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <IssueList
                {...props}
                issues={issues}
                getIssueId={removeIssueHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <CreateIssue {...props} addIssueHandler={addIssueHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditIssue
                {...props}
                updateIssueHandler={updateIssueHandler}
              />
            )}
          />

          <Route path="/issues/:id" component={IssueDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
