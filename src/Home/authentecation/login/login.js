import "./login.css";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";

export default function LoginComponent() {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const [Login, setData] = useState({
    email: "",
    password: "",
  });

  const [invalid, setErrors] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    if (!invalid.email && !invalid.password) {
      console.log(Login);
    }
  }, [invalid]);

  const Data = (e) => {
    //console.log(e.target.name, e.target.value);

    if (e.target.name === "email") {
      setData({
        ...Login,
        email: e.target.value,
      });
      setErrors({
        ...invalid,
        email:
          e.target.value.length === 0
            ? "this field is required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
            ? "this field is not valid email"
            : null,
      });
    }

    if (e.target.name === "password") {
      setData({
        ...Login,
        password: e.target.value,
      });
      setErrors({
        ...invalid,
        password:
          e.target.value.length < 8
            ? "password length not less than 8 characters"
            : // : !/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(
              //     e.target.value
              //   )
              // ? "password length not les than 8 characters"
              null,
      });
    }

    //  (e.target.name === "email" && e.target.name === "password") &&
    //  setData({
    //      email : e.target.value,
    //      password : e.target.value
    //  })
  };

  const Submit = (e) => {
    e.preventDefault();
    setErrors({
      email:
        Login.email.length === 0
          ? "this field is required"
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Login.email)
          ? "this field is not valid email"
          : null,

      password:
        Login.password.length < 8
          ? "password length not less than 8 characters"
          : //   : !/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(
            //       Login.password
            //     )
            //   ? "password length not les than 8 characters"
            null,
    });
  };

  return (
    <div className="container mt-5 border border-warning bg-warning text-dark p-5 rounded fw-bolder">
      <form onSubmit={(e) => Submit(e)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            value={Login.email}
            onChange={(e) => Data(e)}
            type="email"
            className="form-control"
          />
          {invalid.email && (
            <small className="text-danger">{invalid.email}</small>
          )}
        </div>
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <div className="input-group mb-3">
          <input
            name="password"
            value={Login.password}
            onChange={(e) => Data(e)}
            type={showPass ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword1"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="btn btn-dark"
          >
            show
          </button>
          {invalid.password && (
            <small className="text-danger">{invalid.password}</small>
          )}
        </div>

        <button type="submit" className="btn btn-outline-dark ms-5 fw-bolder">
          Log in
        </button>
      </form>
    </div>
  );
}
