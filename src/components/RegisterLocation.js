import React, { Component } from "react";
import images from "./../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export class RegisterLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { stepId: 3 };
  }

  submit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <div
        className={`col-10 offset-1 form-step ${
          this.props.step === this.state.stepId ? "" : "hidden"
        }`}
      >
        {/* <!-- COUNTRY --> */}
        <div className="form-input d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="country_iso" className="form-label">
              Country
            </label>
            <FontAwesomeIcon
              icon={faSpinner}
              className={`icon fa-spin ${
                this.props.registerLocation.countrySpinner ? "" : "hidden"
              }`}
            />
          </div>
          <input
            list="countries"
            type="text"
            name="country"
            id="country"
            className={`form-control ${
              this.props.errors.country.length > 0 &&
              !this.props.errors.errorsHidden
                ? "error"
                : ""
            }`}
            placeholder="Search your country"
            autoComplete="off"
            onChange={this.props.handleCountryChange}
            disabled={this.props.registerLocation.countryDisabled}
          />
          <datalist id="countries">
            {this.props.registerLocation.countryCollection.map((country) => (
              <option value={country.name} key={country.iso2}></option>
            ))}
          </datalist>
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.country}
          </div>
        </div>
        {/* <!-- STATE --> */}
        <div className="form-input d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="state_iso" className="form-label">
              State/Province
            </label>
            <FontAwesomeIcon
              icon={faSpinner}
              className={`icon fa-spin ${
                this.props.registerLocation.stateSpinner ? "" : "hidden"
              }`}
            />
          </div>
          <input
            list="states"
            type="text"
            name="state_iso"
            id="state_iso"
            className={`form-control ${
              this.props.errors.state.length > 0 &&
              !this.props.errors.errorsHidden
                ? "error"
                : ""
            }`}
            placeholder="Search your state"
            autoComplete="off"
            onChange={this.props.handleStateChange}
            disabled={this.props.registerLocation.stateDisabled}
            value={this.props.state}
          />
          <datalist id="states">
            {this.props.registerLocation.stateCollection.map((state) => (
              <option value={state.name} key={state.iso2}></option>
            ))}
          </datalist>
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.state}
          </div>
        </div>
        {/* <!-- CITY --> */}
        <div className="form-input d-flex flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <FontAwesomeIcon
              icon={faSpinner}
              className={`icon fa-spin ${
                this.props.registerLocation.citySpinner ? "" : "hidden"
              }`}
            />
          </div>
          <input
            list="cities"
            type="text"
            name="city"
            id="city"
            className={`form-control ${
              this.props.errors.city.length > 0 &&
              !this.props.errors.errorsHidden
                ? "error"
                : ""
            }`}
            placeholder="Search your city"
            autoComplete="off"
            onChange={this.props.handleCityChange}
            disabled={this.props.registerLocation.cityDisabled}
            value={this.props.city}
          />
          <datalist id="cities">
            {this.props.registerLocation.cityCollection.map((city) => (
              <option value={city.name} key={city.id}></option>
            ))}
          </datalist>
          <div
            className={`form-text ${
              this.props.errors.errorsHidden ? "hidden" : ""
            }`}
          >
            {this.props.errors.city}
          </div>
        </div>
        {/* <!-- SUBMIT BUTTON --> */}
        <div
          className={`form-input d-flex justify-content-end ${
            this.props.registered.status ? "hidden" : ""
          }`}
        >
          <button
            className="btn_form"
            id="btn_submit"
            onClick={this.submit}
            disabled={this.props.submitDisabled}
          >
            <img src={images.submit} alt="submit" />
          </button>
        </div>
        {/* <!-- MESSAGE --> */}
        <div
          className={`form-input d-flex flex-column align-items-center ${
            this.props.registered.status ? "" : "hidden"
          }`}
        >
          <p className="message">{this.props.registered.primary}</p>
          <p className="message">{this.props.registered.secondary}</p>
        </div>
      </div>
    );
  }
}
