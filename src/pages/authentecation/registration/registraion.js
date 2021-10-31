import "./registration.css";
import React, { useState, useEffect } from "react";

export default function RegistComponent() {
  const [Signup, setSignup] = useState({
    Name: "",
    Email: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [invalid, setError] = useState({
    Name: null,
    Email: null,
    UserName: null,
    Password: null,
    ConfirmPassword: null,
  });

  useEffect(() => {
    if (
      !invalid.Name &&
      !invalid.Email &&
      !invalid.UserName &&
      !invalid.Password &&
      !invalid.ConfirmPassword
    ) {
      console.log(Signup);
    }
  }, [invalid]);

  const Data = (e) => {
    //console.log(e.target.name, e.target.value);
    if (e.target.name === "Name") {
      setSignup({
        ...Signup,
        Name: e.target.value,
      });
      setError({
        ...invalid,
        Name: e.target.value.length === 0 ? "Required" : null,
      });
    }

    if (e.target.name === "Email") {
      setSignup({
        ...Signup,
        Email: e.target.value,
      });
      setError({
        ...invalid,
        Email:
          e.target.value.length === 0
            ? "Required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
            ? "this field is not valid email"
            : null,
      });
    }

    if (e.target.name === "UserName") {
      setSignup({
        ...Signup,
        UserName: e.target.value,
      });
      setError({
        ...invalid,
        UserName:
          e.target.value.length === 0
            ? "Required"
            : !/^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$/.test(e.target.value)
            ? "username must not contain space"
            : null,
      });
    }

    if (e.target.name === "Password") {
      setSignup({
        ...Signup,
        Password: e.target.value,
      });
      setError({
        ...invalid,
        Password:
          e.target.value.length < 8
            ? "password length not less than 8 charactar"
            : // : !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%?&])[0-9a-zA-Z]{8,}$/.test(
              //     e.target.value
              //   )
              // ? "password must contains at least one lowercase , one uppercase , at least one digit and special character"
              null,
      });
    }

    if (e.target.name === "ConfirmPassword") {
      setSignup({
        ...Signup,
        ConfirmPassword: e.target.value,
      });
      setError({
        ...invalid,
        ConfirmPassword:
          e.target.value != Signup.Password
            ? "Password does not match Confirm"
            : null,
      });
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    //console.log(e);
    setError({
      ...invalid,
      Name: Signup.Name.length === 0 ? "Required" : null,

      Email:
        Signup.Email.length === 0
          ? "Required"
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Signup.Email)
          ? "this field is not valid email"
          : null,
      UserName:
        Signup.UserName.length === 0
          ? "Required"
          : !/^[-a-zA-Z0-9-()]+(\S+[-a-zA-Z0-9-()]+)*$/.test(Signup.UserName)
          ? "username must not contain space"
          : null,
      Password:
        Signup.Password.length < 8
          ? "password length not less than 8 charactar"
          : // : !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%?&])[0-9a-zA-Z]{8,}$/.test(
            //     e.target.value
            //   )
            // ? "password must contains at least one lowercase , one uppercase , at least one digit and special character"
            null,
      ConfirmPassword:
        Signup.ConfirmPassword != Signup.Password
          ? "Password does not match Confirm"
          : null,
    });
  };

  return (
    <div className="container m-5 mt-3 border border-warning bg-warning text-dark p-5 rounded fw-bolder">
      <form onSubmit={(e) => Submit(e)}>
        <div className="mb-3">
          <label for="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="Name"
            value={Signup.Name}
            onChange={(e) => Data(e)}
            className="form-control"
            id="Name"
          />
          {invalid.Name && (
            <small className="text-danger">{invalid.Name}</small>
          )}
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="Email"
            value={Signup.Email}
            onChange={(e) => Data(e)}
            className="form-control"
            id="exampleInputEmail1"
          />
          {invalid.Email && (
            <small className="text-danger">{invalid.Email}</small>
          )}
        </div>
        <div className="mb-3">
          <label for="username" className="form-label">
            UserName
          </label>
          <input
            type="text"
            name="UserName"
            value={Signup.UserName}
            onChange={(e) => Data(e)}
            className="form-control"
            id="username"
          />
          {invalid.UserName && (
            <small className="text-danger">{invalid.UserName}</small>
          )}
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="Password"
            value={Signup.Password}
            onChange={(e) => Data(e)}
            className="form-control"
            id="password"
          />
          {invalid.Password && (
            <small className="text-danger">{invalid.Password}</small>
          )}
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            ConfirmPassword
          </label>
          <input
            type="password"
            name="ConfirmPassword"
            value={Signup.ConfirmPassword}
            onChange={(e) => Data(e)}
            className="form-control"
            id="password"
          />
          {invalid.ConfirmPassword && (
            <small className="text-danger">{invalid.ConfirmPassword}</small>
          )}
        </div>
        <button type="submit" className="btn btn-outline-dark ms-5 fw-bolder">
          Sign Up
        </button>
      </form>
    </div>
  );
}
