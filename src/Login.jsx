import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import "./libs/bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./css/login.css";
import "./css/reset.css";
import "./css/s4yt.css";

function Login() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <body className="vh-100">
      <div className="container">
        {/*<!-- HEADER --> */}
        <header>
          <div className="col-8 offset-2 col-sm-4 offset-sm-0 col-lg-4 offset-lg-0 logo">
            <img src="./assets/logo S4YT.png" alt="Logo S4YT" />
          </div>
          <div className="col-8 offset-2 col-sm-6 offset-sm-0 title-div py-2">
            <h1 className="title">Login</h1>
          </div>
        </header>
        {/*<!-- FORM --> */}
        <section className="row form-section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
              required
              type="email"
            />
            <input
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  // message: "Password must be at least 5 characters",
                },
              })}
              type="password"
              required
            />
            <input type="submit" />
          </form>
        </section>
      </div>
    </body>
  );
}

export default Login;
