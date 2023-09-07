import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";
import { useRef } from "react";

function Contact() {
  const [data, setdata] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q35sq4s",
        "template_5dmr183",
        form.current,
        "CBH_PPOmx3sY_DSjN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdata(true);
          // form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-div" id="contact">
      <div className="contact-name">
        <span>Get in touch </span>
        <span>Contact me</span>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="user_name"
            placeholder="Full name "
          />
          <input
            type="email"
            className="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            name="message"
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value={"send"}
            className="button send-button"
            name="send"
            id=""
          />
          <br />
          <br />
          <span className="span">
            {data ? "Thanks for Contact  me " : "Write a Message"}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
