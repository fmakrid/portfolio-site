import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact me!</h1>
      <form
        action="https://formsubmit.co/55e6fbed286916b6213bac7b81474a8d"
        method="POST"
      ><div>
        <input type="hidden" name="_subject" value="Email from Portfolio" />
      </div>
        <div className="form-group">
          <div className="form-row">  
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Contact;
