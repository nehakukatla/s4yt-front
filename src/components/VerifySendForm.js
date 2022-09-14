import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBlockQuestion } from "@fortawesome/pro-solid-svg-icons";
import axios from "../config/axios";
import images from "./../assets/images";

export default class VerifySendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitDisable: false,
      resend: {
        status: false,
        primary: "",
        secondary: "",
      },
      formData: {
        email: "",
      },
      errors: {
        email: "",
        errorsHidden: true,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*
   * Method handles changes event in form inputs
   */
  handleChange = (input) => (e) => {
    // update state formData value
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: {
          ...prevState.formData,
          [input]: e.target.value,
        },
      };
    });
  };

  /*
   * Method handles register
   */
  handleSubmit = (e) => {
    e.preventDefault();
    // disable to avoid double input
    this.setState((prevState) => {
      return {
        ...prevState,
        submitDisable: true,
      };
    });

    // validate form data
    let validForm = this.validate(this.state.formData);

    if (!validForm.valid) {
      this.setState((prevState) => {
        return {
          ...prevState,
          submitDisable: false,
          errors: {
            ...prevState.errors,
            errorsHidden: false,
          },
        };
      });
    } else {
      // API resend verify email endpoint
      axios
        .post("/email/verify", { email: this.state.formData.email })
        .then((response) => {
          this.setState((prevState) => {
            return {
              ...prevState,
              resend: {
                primary: response.data.success
                  ? "Email sent!"
                  : "Whoops! There was an error",
                secondary: response.data.success
                  ? "Now just look in your inbox to verify your email!"
                  : "Please reach out in our Discord to fix it",
                status: true,
              },
            };
          });
        }).catch(error => {
          if (error.response) {
            this.setState((prevState) => {
              return {
                ...prevState,
                submitDisable: false,
                errors: {
                  ...prevState.errors,
                  email: "Player mail not found",
                  errorsHidden: false,
                },
              };
            });
          }
        });;
    }
  };

  /*
   * Method validates form data before submit
   */
  validate = (formData) => {
    let validate = {
      valid: true,
    };

    // email validation
    if (
      formData.email.length == 0 ||
      formData.email == "" ||
      formData.email == null
    ) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            email: "Tell us your email",
          },
        };
      });
    } else {
      let emailRegex = new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
      );
      if (!emailRegex.test(formData.email)) {
        validate.valid = false;
        validate.registerBase = false;
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: {
              ...prevState.errors,
              email: "This is not a valid email",
            },
          };
        });
      }
    }

    return validate;
  };

  render() {
    return (
      <section className="row form-section">
        {/* step list element */}
        <form className="register-form" method="POST">
          <div className="col-10 offset-1 my-5 form-wrapper row test">
            <div className="col-10 offset-1 form-step">
              {/* <!-- EMAIL --> */}
              <div className="form-input d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <FontAwesomeIcon
                    icon={faBlockQuestion}
                    className="icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-classname="custom-tooltip"
                    title="The email you used for register."
                  />
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`form-control ${
                    this.state.errors.email.length > 0 &&
                    !this.state.errors.errorsHidden
                      ? "error"
                      : ""
                  }`}
                  autoComplete="off"
                  onChange={this.handleChange("email")}
                />
                <div
                  className={`form-text ${
                    this.state.errors.errorsHidden ? "hidden" : ""
                  }`}
                >
                  {this.state.errors.email}
                </div>
              </div>
              {/* <!-- SUBMIT BUTTON --> */}
              <div
                className={`form-input d-flex justify-content-end ${
                  this.state.resend.status ? "hidden" : ""
                }`}
              >
                <button
                  className="btn_form"
                  id="btn_submit"
                  onClick={this.handleSubmit}
                  disabled={this.state.submitDisable}
                >
                  <img src={images.submit} alt="submit" />
                </button>
              </div>
              {/* <!-- MESSAGE --> */}
              <div
                className={`form-input d-flex flex-column align-items-center ${
                  this.state.resend.status ? "" : "hidden"
                }`}
              >
                <p className="message">{this.state.resend.primary}</p>
                <p className="message">{this.state.resend.secondary}</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
