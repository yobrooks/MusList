//use this to return different menu items for sidebar or regular nav
//array of objects
import React from 'react';

const regularNavItems = [
    {
        title: 'Home',
        link: '#',
        class: 'nav-links'
    },
    {
        title: 'Reg1',
        link: '#',
        class: 'nav-links'
    },
    {
        title: 'Reg2',
        link: '#',
        class: 'nav-links'
    },
    {
        title: 'Reg3',
        link: '#',
        class: 'nav-links'
    },
]

const sideNavItems = [
    {
        title: 'Side1',
        link: '#',
        class: 'nav-links'
    },
    {
        title: 'Side2',
        link: '#',
        class: 'nav-links'
    },
    {
        title: 'Side3',
        link: '#',
        class: 'nav-links'
    },
    {
        title: 'Side4',
        link: '#',
        class: 'nav-links'
    },
]

//if the props passed in needs sidebar, use sidebar items, else use regular items
export default function NavMenuItems(props){
    const rawMenuItems=props.sidebar ? sideNavItems : regularNavItems;
    const menuItems = rawMenuItems.map((item, index) => 
        <li key={index}>
            <a className= {item.class} href={item.link}>
                {item.title}
            </a>
        </li>
    );

    return (menuItems);
}
