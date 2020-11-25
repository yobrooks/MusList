//use this to return different menu items for sidebar or regular nav
//array of objects
import React from "react";

const regularNavItems = [
  {
    title: "Home",
    link: "#",
    class: "nav-links",
  },
  {
    title: "About",
    link: "#",
    class: "nav-links",
  },
  {
    title: "Log In",
    link: "#",
    class: "nav-links",
  },
];

const sideNavItems = [
  {
    title: "Listen List",
    link: "#",
    class: "sidebar-nav-links",
    icon: "FaHeadphonesAlt",
  },
  {
    title: "Buy List",
    link: "#",
    class: "sidebar-nav-links",
    icon: "RiMoneyDollarCircleFill",
  },
  {
    title: "Settings",
    link: "#",
    class: "sidebar-nav-links",
    icon: "MdSettings",
  },
  {
    title: "Logout",
    link: "#",
    class: "sidebar-nav-links",
    icon: "RiLogoutCircleLine",
  },
];

//if the props passed in needs sidebar, use sidebar items, else use regular items
export default function NavMenuItems(props) {
  const rawMenuItems = props.sidebar ? sideNavItems : regularNavItems;
  const menuItems = rawMenuItems.map((item, index) => (
    <li key={index}>
      {/*If there is an icon for the option, add the icon here*/}
      <a className={item.class} href={item.link}>
        {item.title}
      </a>
    </li>
  ));

  return menuItems;
}
