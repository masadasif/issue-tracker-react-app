import React, { useState, useEffect } from "react";
import Form from "../helper/Form";
import api from "../../api/api";

const Edit = (props) => {
    const [issue, setIssue] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const { data } = await api.get("/issues/" + props.match.params.id);
            setIssue(data.data);
            console.log(data.data);
        };
        getList();
    }, []);

    const renderComponent = () => {
        console.log(issue);
        if (issue !== []) {
            <div className="ui container">
                <h1>Edit issue:</h1>
                {console.log(issue)}
                {
                    <Form
                        submitText="Submit Issue"
                        title={issue.attributes.title}
                        status={issue.attributes.status}
                        description={issue.attributes.description}
                    />
                }
            </div>;
        } else {
            <div class="ui segment">
                <div class="ui active inverted dimmer">
                    <div class="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>;
        }
    };
    return <>{renderComponent()}</>;
};

export default Edit;
