import React from 'react';
import resume from '../../assets/resume.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href={resume} className='btn1' target='_blank'>Get Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    );
}

export default CTA;