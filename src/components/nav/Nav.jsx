import React, { useState } from 'react';
import './Nav.css';
import {FiHome}  from 'react-icons/fi'
import {FiUser}  from 'react-icons/fi'
import {FiBook}  from 'react-icons/fi'
import {FiMessageSquare}  from 'react-icons/fi'
import {RiServiceLine}  from 'react-icons/ri'


function Nav() {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <FiHome/>
            </a>

            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
                <FiBook/>
            </a>

            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <FiUser/>
            </a>

            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
                <FiMessageSquare/>
            </a>
        </nav>
    );
}

export default Nav;