import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({
        color: isActive ? "rgb(132, 158, 149" : "black",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
        marginRight: "15px",
        })}>Home</NavLink>


      <NavLink
        to="/contactus"
        style={({ isActive }) => ({
          color: isActive ? "rgb(132, 158, 149" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
        })}
        >Contact Us
      </NavLink>

      <NavLink
        to="/mypuzzles"
        style={({ isActive }) => ({
          color: isActive ? "rgb(132, 158, 149" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
        })}
        >My Puzzles
      </NavLink> 
    </nav>
  );
}

export default NavBar;