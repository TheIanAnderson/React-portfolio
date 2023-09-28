import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailRequired, setIsEmailRequired] = useState(false);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
  };

  const handleBlur = () => {
    // Regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Check if the entered email matches the email pattern
    setIsValidEmail(emailPattern.test(email));

    // Check if the email field is required and empty
    setIsEmailRequired(email.trim() === '');
  };

  return (
    <div className="col-6">
      <br />
      <h1>Contact Page</h1>
      <p>Integer cursus bibendum sem non pretium...</p>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${(!isValidEmail || isEmailRequired) && 'is-invalid'}`}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur}
        />
        {!isValidEmail && (
          <div className="invalid-feedback">Please enter a valid email address.</div>
        )}
        {isEmailRequired && (
          <div className="invalid-feedback">This field is required.</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
