import React from 'react';
import './About.css';
import me from '../../assets/me.png'
import {FaUniversity} from 'react-icons/fa'
import {IoIosSchool} from 'react-icons/io'

function About() {
    return (
        <section id='about'>
            <h2>About me</h2>

            <div className="container about__container">

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaUniversity size="2em" className='about__icon'/>
                            <h5>University of Houston</h5>
                            <small>Major: Computer Science</small>
                        </article>

                        <article className='about__card'>
                            <IoIosSchool size="2em" className='about__icon'/>
                            <h5>Year</h5>
                            <small>Junior</small>
                        </article>

                        {/* <article className='about__card'>
                            <FaUniversity className='about__icon'/>
                            <h5>University of Houston</h5>
                            <small>Major: Computer Science</small>
                        </article> */}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;