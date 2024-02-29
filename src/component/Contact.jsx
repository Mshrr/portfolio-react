import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mdoqzpzy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="row pt-5 pb-5">
        <h2 className="text-info text-center pt-5"><b>My Contact</b></h2>
        <p className="text-white text-center">If you have questions, suggestions or other interests, please contact me</p>
      <form onSubmit={handleSubmit} className="col-md-4 offset-md-4 text-info pb-5 border rounded p-4 border-info">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" class="form-control bg-transparent mb-3 btn btn-outline-info text-white"/>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" class="form-control bg-transparent mb-3 btn btn-outline-info text-white" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" class="form-control bg-transparent mb-3 btn btn-outline-info text-white" />
        <ValidationError prefix="Message" errors={state.errors} />
        <button type="submit" className="btn btn-outline-info w-100 rounded" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
