import React, { Component } from "react";
import images from "./../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlockQuestion } from "@fortawesome/pro-solid-svg-icons";
import axios from "./../config/axios";

export class RegisterBase extends Component {
  constructor(props) {
    super(props);
    this.state = { stepId: 1, educations: false, grades: false };
  }

  /*
   * Method handles API requests for form data
   */
  componentDidMount() {
    // API education endpoint
    axios.get("/educations").then((response) => {
      if (response.data.success) {
        this.props.setEducationCollection(response.data.data.educations);
        this.setState((prevState) => {
          return {
            ...prevState,
            educations: true,
          };
        });
      }
    });
    // API grades endpoint
    axios.get("/grades").then((response) => {
      if (response.data.success) {
        this.props.setGradeCollection(response.data.data.grades);
        this.setState((prevState) => {
          return {
            ...prevState,
            grades: true,
          };
        });
      }
    });
  }

  /*
   * Method handles changes from the next button.
   */
  nextStep = (e) => {
    e.preventDefault();
    if (this.state.educations && this.state.grades) {
      this.props.nextStep();
    }
  };

  render() {
    return (
      <div
        className={`col-10 offset-1 form-step ${
          this.props.step === this.state.stepId ? "" : "hidden"
        }`}
      >
        <div className="form-input d-flex flex-column">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`form-control ${
              this.props.errors.name.length > 0 && !this.props.errors.errorsHidden ? "error" : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("name")}
          />
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.name}
          </div>
        </div>
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
              title="This top tooltip is themed via CSS variables."
            />
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className={`form-control ${
              this.props.errors.email.length > 0 && !this.props.errors.errorsHidden ? "error" : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("email")}
          />
          <div className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}>
            {this.props.errors.email}
          </div>
        </div>
        {/* <!-- PASS --> */}
        <div className="form-input d-flex flex-column pt-lg-2">
          <label htmlFor="password" className="form-label">
            Pass
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`form-control ${
              this.props.errors.password.length > 0 && !this.props.errors.errorsHidden ? "error" : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("password")}
          />
          <div className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}>
            {this.props.errors.password}
          </div>
        </div>
        {/* <!-- PASS CONFIRMATION --> */}
        <div className="form-input d-flex flex-column pt-lg-3">
          <label htmlFor="password_confirmation" className="form-label">
            Pass Confirm
          </label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            className={`form-control ${
              this.props.errors.password_confirmation.length > 0 && !this.props.errors.errorsHidden ? "error" : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("password_confirmation")}
          />
          <div className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}>
            {this.props.errors.password_confirmation}
          </div>
        </div>
        {/* <!-- NEXT BUTTON --> */}
        <div className="form-input d-flex justify-content-end">
          <button className="btn_form" onClick={this.nextStep} data-step-id="2">
            <img src={images.next} alt="next step" />
          </button>
        </div>
      </div>
    );
  }
}
