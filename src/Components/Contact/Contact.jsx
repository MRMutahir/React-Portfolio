import React from 'react'
import emailjs from '@emailjs/browser';
import "../Contact/Contact.css"
import { useRef } from 'react';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q35sq4s', 'template_9sw7f6v', form.current, 'CBH_PPOmx3sY_DSjN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-div'>
            <div className="contac-name">
                <span>Get in touch </span>
                <span>Contact me</span>
            </div>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' name='user-name' placeholder='Full name ' />
                    <input type="email" className='email' name='user-email' placeholder='Email' />
                    <textarea name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
                    <input type="submit" value={"send"} className='button' name="" id="" />
                </form>
            </div>
        </div>
    )
}

export default Contact