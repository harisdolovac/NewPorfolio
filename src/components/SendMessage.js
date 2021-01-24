import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import "../css/SendMessage.css";
init("user_UteJ52dnfK3Ei2e1AykcW");

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ri1ar41",
        e.target,
        "user_UteJ52dnfK3Ei2e1AykcW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact_form" onSubmit={sendEmail}>
      <input type="hidden" name="from_name" />
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
