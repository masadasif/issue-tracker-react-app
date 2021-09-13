import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item active">
                List
            </Link>
            <div className="right menu">
                <Link to="/create" className="item active">
                    Create
                </Link>
            </div>
        </div>
    );
};

export default Header;
