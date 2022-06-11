import React from "react";
import { NavLink } from "react-router-dom";

const HeaderPage =()=>{
    const activeStyle = { color: "#F15B2A" };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>

        </nav>
    )
}

export default HeaderPage;