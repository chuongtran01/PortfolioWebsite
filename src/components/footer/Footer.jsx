import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'></a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/chuongtran2001/" target="_blank" rel="noreferrer"><BsLinkedin size="1.3rem"/></a>
                <a href="https://github.com/chuongtran01" target="_blank" rel="noreferrer"><BsGithub size="1.3rem"/></a>
            </div>
        </footer>
    );
}

export default Footer;