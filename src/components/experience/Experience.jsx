import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCplusplus} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {SiJavascript} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import { Icon } from '@iconify/react';




function Experience() {
    return (
        <section id="experience">
            <h2>Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <div className="experience__content">
                        <article className='experience__details'>
                            {/* <SiCplusplus size="1.9em" className="experience__details-icon"/> */}
                            <Icon icon="logos:c-plusplus" width="35" height="35"/>
                            <div>
                                <h4>C++</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            {/* <SiJavascript size="1.9em" className="experience__details-icon"/> */}
                            <Icon icon="logos:javascript" width="35" height="35"/>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            {/* <GrReactjs size="1.9em" className="experience__details-icon"/> */}
                            <Icon icon="vscode-icons:file-type-reactjs" width="35" height="35" />
                            <div>
                                <h4>ReactJS</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            {/* <SiPython size="1.9em" className="experience__details-icon"/> */}
                            <Icon icon="logos:python" width="35" height="35"/>
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            {/* <AiFillHtml5 size="1.9em" className="experience__details-icon"/> */}
                            <Icon icon="vscode-icons:file-type-html" width="35" height="35"/>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            {/* <SiCss3 size="1.9em" className="experience__details-icon"/> */}
                            <Icon icon="vscode-icons:file-type-css" width="35" height="35"/>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            {/* <BsFillPatchCheckFill size="1.9em" className="experience__details-icon"/>
                             */}
                            <Icon icon="vscode-icons:file-type-matlab" width="35" height="35"/>
                            <div>
                                <h4>MATLAB</h4>
                            </div>
                        </article>
                    </div>
                </div>            
            </div>
        </section>
    );
}

export default Experience;