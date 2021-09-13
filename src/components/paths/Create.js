import React from "react";
import Form from "../helper/Form";

const Create = () => {
    return (
        <div className="ui container">
            <h1>Create an issue:</h1>
            <Form submitText="Submit Issue" />
        </div>
    );
};

export default Create;
