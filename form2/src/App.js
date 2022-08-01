import React, { useState } from "react";

const App = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailIsValid, setEmailIsValid] = useState(false);
  let [passwordIsValid, setPasswordIsValid] = useState(false);
  let [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section className="">
      {!isSubmitted ? (
        <>
          <h1>Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <input
                type="text"
                className={`${
                  firstName.length > 1 ? "is-valid" : "is-invalid"
                }`}
                id="inputFirstName"
                onChange={handleFirstNameChange}
              ></input>
            </div>
            <div class="">
              <label htmlFor="inputLastName" className="">
                Last Name
              </label>
              <input
                type="text"
                className={`${lastName.length > 1 ? "is-valid" : "is-invalid"}`}
                id="inputLastName"
                onChange={handleLastNameChange}
              ></input>
            </div>
            <div class="">
              <label htmlFor="inputEmail" className="">
                Email address
              </label>
              <input
                type="email"
                className={`${emailIsValid ? "is-valid" : "is-invalid"}`}
                id="inputEmail"
                onChange={handleEmailChange}
              ></input>
            </div>
            <div class="">
              <label htmlFor="inputPassword" className="">
                Password
              </label>
              <input
                type="password"
                className={`${passwordIsValid ? "is-valis" : "is-invalid"}`}
                id="inputPassword"
                onChange={handlePasswordChange}
              ></input>
            </div>
            {/* <div class="">
          <input
            type="checkbox"
            className=""
            id="checkRememberMe"
            onChange={handleRememberMeChange}
          ></input>
          <label className="" htmlFor="checkRememberMe">
            Remember me
          </label>
        </div> */}
            <button type="submit" className="">
              Submit
            </button>
          </form>
        </>
      ) : (
        <h1 className="">
          Félicitations {setFirstName} {setLastName} !!!
        </h1>
      )}
    </section>
  );
};

export default App;
