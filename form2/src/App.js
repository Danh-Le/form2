import React, { useState } from "react";

const App = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailIsValid, setEmailIsValid] = useState(false);
  let [passwordIsValid, setPasswordIsValid] = useState(false);
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [rememberMe, setRememberMe] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName((firstName = e.target.value));
  };
  const handleLastNameChange = (e) => {
    setLastName((lastName = e.target.value));
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isValid = regEx.test(value);
    setEmailIsValid((emailIsValid = isValid));
    setEmail((email = value));
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const isValid = value.length > 5;
    setPasswordIsValid((passwordIsValid = isValid));
    setPassword((password = value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const allIsValid = passwordIsValid && emailIsValid;
    setIsSubmitted((isSubmitted = allIsValid));
  };
  const handleRememberMeChange = (e) => {
    setRememberMe((rememberMe = e.target.checked));
  };

  return (
    <section className="mb-5 px-5">
      {!isSubmitted ? (
        <>
          <h1 className="text-center">Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className={`form-control ${
                  firstName.length > 1 ? "is-valid" : "is-invalid"
                }`}
                id="inputFirstName"
                onChange={handleFirstNameChange}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="inputLastName" className="">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  lastName.length > 1 ? "is-valid" : "is-invalid"
                }`}
                id="inputLastName"
                onChange={handleLastNameChange}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${
                  emailIsValid ? "is-valid" : "is-invalid"
                }`}
                id="inputEmail"
                onChange={handleEmailChange}
              ></input>
            </div>
            <div class="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  passwordIsValid ? "is-valis" : "is-invalid"
                }`}
                id="inputPassword"
                onChange={handlePasswordChange}
              ></input>
            </div>
            <div class="">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkRememberMe"
                onChange={handleRememberMeChange}
              ></input>
              <label className="" htmlFor="checkRememberMe">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
      ) : (
        <h1 className="text-center">
          Félicitations {setFirstName} {setLastName} !!!
        </h1>
      )}
    </section>
  );
};

export default App;
