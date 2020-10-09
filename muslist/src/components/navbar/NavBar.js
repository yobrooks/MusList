import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import NavMenuItems from "../navbar/NavMenuItems";
import "../../styles/NavBar.css";

function NavBar(props) {
  //active determines whether hamburger menu has been toggled on or off
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar-container">
      {/*This will be either just logo or AppTitle component className ="nav-logo"*/}
      <div class="nav-logo"></div>
      <div
        className={props.sidebar ? "sidebar-menu-icon" : "menu-icon"}
        onClick={handleClick}
      >
        {active ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
      {/* change class name depending on whether mobile menu active */}
      <ul
        className={
          props.sidebar && active
            ? "sidebar-nav-menu active"
            : props.sidebar && !active
            ? "sidebar-nav-menu"
            : !props.sidebar && active
            ? "nav-menu active"
            : "nav-menu"
        }
      >
        <NavMenuItems sidebar={props.sidebar} />
      </ul>
    </nav>
  );
}

export default NavBar;
