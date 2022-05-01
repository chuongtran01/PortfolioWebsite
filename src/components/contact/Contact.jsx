import React from 'react';
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { Icon } from '@iconify/react';

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hv1ey4k', 'template_0y4ojpp', form.current, 'i6HsuH3KN-1EhW_RH')
          
        e.target.reset();
    };

    return (
        <section id="contact">
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <div className="contact__option">
                        <Icon icon="bxl:gmail" width="35" height="35" className='contact__option-icon-mail'/>
                        <h4>Email</h4>
                        <h5>chuongtran2001@gmail.com</h5>
                        <a href="mailto:chuongtran2001@gmail.com" target="_blank">Send a message</a>
                    </div>

                    <div className="contact__option">
                        <Icon icon="logos:linkedin-icon" width="30" height="30"/>
                        <h4>Linkedin</h4>
                        <h5>Chuong Tran</h5>
                        <a href="https://www.linkedin.com/in/chuongtran2001/" target="_blank">Send a message</a>
                    </div>

                    <div className="contact__option">
                        <Icon icon="simple-icons:messenger" width="30" height="30" className='contact__option-icon-mess'/>
                        {/* <BsMessenger size="1.4em" className='contact__option-icon-mess'/> */}
                        <h4>Messenger</h4>
                        <h5>Chuong Tran</h5>
                        <a href="https://www.facebook.com/uych.tran/" target="_blank">Send a message</a>
                    </div>
                </div>
                {/*END OF CONTACT OPTIONS*/}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="16" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>

            </div>
        </section>
    );
}

export default Contact;