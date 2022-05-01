import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { Icon } from '@iconify/react';

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/chuongtran2001/" target="_blank"><Icon icon="logos:linkedin-icon" width="35" height="35" /></a>
            <a href="https://github.com/chuongtran01/" target="_blank"><Icon icon="icon-park:github" width="35" height="35"/></a>
        </div>
    );
}

export default HeaderSocials;