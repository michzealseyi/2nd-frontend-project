import React from "react";

const Contact = () => {
  return (
    <div className="body">
      <section className="section contact" id="contact">
        <div className="section-center contact-center">
          <article className="contact-title">
            <h3>want lastest tour info and updates?</h3>
            <p>Sign up for newsletter and stay up to date</p>
          </article>
          <form className="contact-form">
            <input
              type="email"
              name="email"
              className="form-control"
              // placeholder="your email"
            />
            {/* THE TYPE="SUBMIT" HELPS US TO SUBMIT D FORM WITH AN ENTER KEY */}
            <button type="" className="btn-submit">
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
