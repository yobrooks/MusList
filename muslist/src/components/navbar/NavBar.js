import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io'
import NavMenuItems from '../navbar/NavMenuItems';
import '../../styles/NavBar.css';
//NOTE: NavBar will have props that sets the sidebar state
function NavBar(){
    //state: click will toggle between hamburger menu and x icon
    //sidebar will be whether it's a sidebar or full menu
    const [sidebar, setSidebar] = useState(false);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
       <nav className="navbar-container">
           {/*This will be either just logo or AppTitle component className = "nav-logo"*/}
           <div className="menu-icon" onClick={handleClick}>
               {active ? <IoMdClose />: <GiHamburgerMenu />}
           </div>
           <ul className={active ? "nav-menu active" : "nav-menu"}>
              <NavMenuItems sidebar={sidebar}/>
           </ul>
       </nav>
    );
}

export default NavBar;