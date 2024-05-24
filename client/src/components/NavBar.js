import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
            <NavLink to="/"><button className="navbutton">HOME</button></NavLink>
            <NavLink to="/teams"><button className="navbutton">Teams</button></NavLink>
            {/* <NavLink to="/new-form"><button className="navbutton">QB's</button></NavLink> */}
        </nav>
    )
}

export default NavBar