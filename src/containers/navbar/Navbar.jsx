import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'



const Menu = () => {
    return (
        <React.Fragment>
            <p><a href=""></a>Nakamura</p>
            <p><a href=""></a>Kwansei</p>
            <p><a href=""></a>Irises</p>
            <p><a href=""></a>Mountain Stream in Summer and Autumn</p>
        </React.Fragment>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false) 
    return (
        <div className="painting__navbar" id='navbar'>
            <div className="painting__navbar-logo">
                <h1>尾形 光琳</h1>
            </div>
            <div className="painting__navbar-links">
                <Menu/>
            </div>

        </div>
    )
}

export default Navbar