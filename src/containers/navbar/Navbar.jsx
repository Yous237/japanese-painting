import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'



const Menu = () => {
    return (
        <React.Fragment>
            <p><a href="#nakamura">Nakamura</a></p>
            <p><a href="#kwansei">Kwansei</a></p>
            <p><a href="#irises">Irises</a></p>
            <p><a href="#mssa">Mountain Stream in Summer and Autumn</a></p>
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
            <div className="painting__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                <div className="painting__navbar-menu_container scale-up-center">
                    <div className="painting__navbar-menu_container-links">
                        <Menu/>
                        
                    </div>
                </div>
                )}
            </div>

        </div>
    )
}

export default Navbar