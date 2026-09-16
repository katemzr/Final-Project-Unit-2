import { NavLink } from "react-router";
import { useState } from "react";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);  //hamburger menu state variable

  return (
    <nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)} >
        ☰  
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"} >

        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? "rgb(132, 158, 149)" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
          })}
          >Home
        </NavLink>

        <NavLink to="/contactus" style={({ isActive }) => ({
          color: isActive ? "rgb(132, 158, 149)" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
          })}
          >Contact Us
        </NavLink>

        <NavLink to="/mypuzzles" style={({ isActive }) => ({
          color: isActive ? "rgb(132, 158, 149)" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
          })}
          >My Puzzles
        </NavLink> 

        <NavLink to="/puzzlesuggestions" style={({ isActive }) => ({
          color: isActive ? "rgb(132, 158, 149)" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
          })}
          >Puzzle Suggestions
        </NavLink>

      </div> 

    </nav>
  );
}

export default NavBar;