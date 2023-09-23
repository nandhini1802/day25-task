import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';
const Nav = () => {
    const textDecoration = {
        textDecoration: 'none',
        color: '#F4F6F7',
        
    }
    const [nav, setNav] = useState('navItem');
    const [bars, setBars] = useState(<i class="fa-solid fa-bars"></i>);
    const handleNav = () => {
        if (nav === 'navItem') {
            setNav('responsive')
            setBars(<i class="fa-solid fa-x"></i>)
        }
        else {
            setNav('navItem')
            setBars(<i class="fa-solid fa-bars"></i>)
        }
    }
    return (
        <nav>
            <div className="logo">
                <button className="bars" onClick={handleNav}>
                    {bars}
                </button>
                <h4>
                    <Link to={'/home'} style={textDecoration}>CURD</Link>
                </h4>
            </div>

            <div className="navBar">
                <div className={nav} >
                    <Link to={'/home'} style={textDecoration} onClick={handleNav}>Home</Link>
                    <Link to={'/about'} style={textDecoration} onClick={handleNav}>About</Link>
                    <Link to={'/contact'} style={textDecoration} onClick={handleNav}>Contact Us</Link>
                    <Link to={'/create'} style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} onClick={handleNav} >
                        <button className="addPost">
                            <i class="fa-solid fa-plus"></i>
                            Add Post
                        </button>
                    </Link>
                </div>
                <div className="user">
                    <Link to={'/profile/:id'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user logo" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;