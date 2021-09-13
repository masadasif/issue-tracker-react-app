import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import useIssues from "../../hooks/useIssues"; */
import api from "../../api/api";

const List = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const { data } = await api.get("/issues");
            console.log(">", data);
            setIssues(data.data);
        };
        getList();
    }, []);

    const renderIssues = issues.map((issue) => {
        return (
            <div className="item" key={issue.id}>
                {
                    <div className="ui middle aligned divided content">
                        <div className="header">{issue.attributes.title}</div>
                        <div className="description">
                            <p>{issue.attributes.description}</p>
                        </div>
                        <div className="extra">
                            <div className="ui label">
                                Status: {issue.attributes.status}
                            </div>
                            <Link
                                className="ui right floated red basic button"
                                to="/"
                            >
                                <i className="trash icon"></i>Delete
                            </Link>
                            <Link
                                className="ui right floated blue basic button"
                                to={`edit/${issue.id}`}
                            >
                                <i className="edit icon"></i>edit
                            </Link>
                        </div>
                    </div>
                }
            </div>
        );
    });

    return <div className="ui divided items ">{renderIssues}</div>;
};

export default List;
