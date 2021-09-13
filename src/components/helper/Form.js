import React from "react";

const Form = (props) => {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Title</label>
                    <div className="field">
                        <input
                            type="text"
                            name="name"
                            placeholder="First Name"
                            value={props.title}
                        />
                    </div>
                    <label>Description</label>
                    <div className="field">
                        <textarea rows="4" placeholder="Description">
                            {props.description}
                        </textarea>
                    </div>
                    <label>Status</label>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" name="example" />
                            <label>Open</label>
                        </div>
                    </div>
                </div>
                <div className="ui button">{props.submitText}</div>
            </form>
        </div>
    );
};
export default Form;
