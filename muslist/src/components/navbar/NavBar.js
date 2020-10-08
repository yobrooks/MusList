import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavMenuItems from '../navbar/NavMenuItems';

function NavBar(){
    //state: click will toggle between hamburger menu and x icon
    //sidebar will be whether it's a sidebar or full menu
    const [sidebar, setSidebar] = useState(false);
    

    return (
       <nav className="navbar">
           {/*This will be either just logo or AppTitle component className = "nav-logo"*/}
           <div className="menu-icon">
               <GiHamburgerMenu />
           </div>
           <ul>
              <NavMenuItems sidebar={sidebar}/>
           </ul>
       </nav>
    );
}

export default NavBar;