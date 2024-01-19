import React, { useState, useRef } from "react";

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      message: messageRef.current.value,
    });

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <h1>Contact Us Form</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" alt="Name" placeholder="Name" ref={nameRef} />
        </div>

        <div>
          <label>Email</label>
          <input type="email" alt="Email" placeholder="Email" ref={emailRef} />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            alt="PhoneNumber"
            placeholder="Phone"
            ref={phoneNumberRef}
          />
        </div>

        <div>
          <label>Your Message</label>
          <textarea
            type="text"
            alt="Text"
            placeholder="Your Message"
            ref={messageRef}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
