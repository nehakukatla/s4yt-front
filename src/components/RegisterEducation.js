import React, { Component } from "react";
import images from "./../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "./../config/axios";

export class RegisterEducation extends Component {
  constructor(props) {
    super(props);
    this.state = { stepId: 2, countries: false };
  }

  /*
   * Method handles API requests for form data
   */
  componentDidMount() {
    // API countries endpoint
    axios.get("/location/countries").then((response) => {
      if (response.data.success) {
        this.props.setCountryCollection(response.data.data.countries);
        this.setState((prevState) => {
          return {
            ...prevState,
            countries: true,
          };
        });
      }
    });
  }

  nextStep = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div
        className={`col-10 offset-1 form-step ${
          this.props.step === this.state.stepId ? "" : "hidden"
        }`}
      >
        {/* <!-- EDUCATION --> */}
        <div className="form-input d-flex flex-column pt-lg-1">
          <div className="d-flex justify-content-between">
            <label htmlFor="education" className="form-label">
              Education
            </label>
            <FontAwesomeIcon
              icon={faSpinner}
              className={`icon fa-spin ${
                this.props.registerEducation.educationSpinner ? "" : "hidden"
              }`}
            />
          </div>
          <select
            name="education"
            id="education"
            className={`form-control ${
              this.props.errors.education.length > 0 &&
              !this.props.errors.errorsHidden
                ? "error"
                : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("education")}
            disabled={this.props.registerEducation.educationDisabled}
          >
            <option value="0">Select your education</option>
            {this.props.registerEducation.educationCollection.map(
              (education) => (
                <option value={education.id} key={education.id}>
                  {education.name}
                </option>
              )
            )}
          </select>
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.education}
          </div>
        </div>
        {/* <!-- SCHOOL --> */}
        <div
          className={`form-input d-flex flex-column ${
            this.props.registerEducation.schoolHidden ? "hidden" : ""
          }`}
        >
          <label htmlFor="school" className="form-label">
            School
          </label>
          <input
            type="text"
            name="school"
            id="school"
            className={`form-control ${
              this.props.errors.school.length > 0 &&
              !this.props.errors.errorsHidden
                ? "error"
                : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("school")}
          />
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.school}
          </div>
        </div>
        {/* <!-- GRADE --> */}
        <div className="form-input d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="grade" className="form-label">
              Grade
            </label>
            <FontAwesomeIcon
              icon={faSpinner}
              className={`icon fa-spin ${
                this.props.registerEducation.gradeSpinner ? "" : "hidden"
              }`}
            />
          </div>
          <select
            name="grade"
            id="grade"
            className={`form-control ${
              this.props.errors.grade.length > 0 &&
              !this.props.errors.errorsHidden
                ? "error"
                : ""
            }`}
            autoComplete="off"
            onChange={this.props.handleChange("grade")}
            disabled={this.props.registerEducation.gradeDisabled}
          >
            <option value="0">Select your grade</option>
            {this.props.registerEducation.gradeCollection.map((grades) => (
              <option value={grades.id} key={grades.id}>
                {grades.name}
              </option>
            ))}
          </select>
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.grade}
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
