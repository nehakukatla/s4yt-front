import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: "",
      password: "",
      fields: {
        error: false,
        errors: {
          email: "Wrong Format",
          password: "Password must have at least 5 charectars",
        },
      },
    };
    this.submit = this.submit.bind(this);
  }
  validateLogin(field, input) {
    switch (field) {
      case "email":
        if (this.emailValidation.test(input)) {
          document.getElementById(field + "Error").style.display = "none";
        } else {
          document.getElementById(field + "Error").style.display = "block";
        }
    }
  }
  // Handle fields change and validation
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    this.validateLogin(input, e.target.value);
  };

  emailValidation =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  submit = (e) => {};

  render() {
    return (
      <section className="row form-section">
        <form className="login-form">
          <div className="col-8 offset-1 my-4 form-wrapper">
            <div className="form-input d-flex flex-column">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                onChange={this.handleChange("email")}
              />
              <div
                id="emailError"
                className="form-text"
                style={{ display: "none" }}
              >
                {this.state.fields.errors.email}
              </div>
            </div>
            <div className="form-input d-flex flex-column mt-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={this.handleChange("password")}
              />
              <div
                id="passwordError"
                className="form-text"
                style={{ display: "none" }}
              >
                {this.state.fields.errors.password}
              </div>
            </div>
          </div>
          <div className="form-input col-2 d-flex">
            <input
              type="image"
              name="login_btn"
              src="./assets/ok btn normal.png"
              className="login-btn"
              onClick={console.log(this.submit())}
            />
          </div>
        </form>
      </section>
    );
  }
}
