import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
       
        <nav>
            <h1>Home Foods</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Kitchen</Link>
            </div>

            <div className="links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/add">Add</Link>
                <Link to="/update">Update</Link>
            </div>
        </nav>
    
     );
}
 
export default NavBar;