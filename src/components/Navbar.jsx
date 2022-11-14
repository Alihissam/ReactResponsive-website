import React, { useState } from 'react'
import "./navbar.css"
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className="navbar shadow">
                <div className="container ">

                    <div className="logo">
                        <HashLink smooth to="/#" className='logo-icon'> <span className='logo'>Echo</span></HashLink>
                    </div>
                    <ul className={click ? "nav-item mobile" : 'nav-item'}>
                        <li className='list-item' onClick={handleClick}>
                            <HashLink smooth to="/#" className='nav-links'
                            > Home
                            </HashLink>
                        </li>
                        <li className='list-item' onClick={handleClick}>
                            <HashLink smooth to="/#about" className='nav-links'
                            > About
                            </HashLink>
                        </li>
                        <li className='list-item' onClick={handleClick}>
                            <HashLink smooth to="/#features" className='nav-links'
                            > Features
                            </HashLink>
                        </li>
                        <li className='list-item' onClick={handleClick}>
                            <HashLink smooth to="/#services" className='nav-links'
                            > Services
                            </HashLink>
                        </li>
                        <li className='list-item' onClick={handleClick}>
                            <HashLink smooth to="/#faq" className='nav-links'
                            > Faq
                            </HashLink>
                        </li>
                        <li className='list-item' onClick={handleClick}>
                            <HashLink smooth to="/#contact" className='nav-links'
                            > Contact Us
                            </HashLink>
                        </li>
                        {/* <button className='download'>Download Now</button> */}
                    </ul>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <CloseIcon style={{ fontSize: "30px" }} /> : <MenuIcon style={{ fontSize: "30px" }} />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
