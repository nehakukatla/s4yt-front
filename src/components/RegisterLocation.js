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
		this.props.submit();
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
								this.props.countrySpinner ? "hidden" : ""
							}`}
						/>
					</div>
					<input
						list="countries"
						type="text"
						name="country"
						id="country"
						className="form-control"
						placeholder="Search your country"
						autoComplete="off"
						onChange={this.props.handleChange("country")}
						disabled={this.props.countryDisabled}
					/>
					<datalist id="countries">
						{this.props.countries.map((country) => (
							<option value={country.name} key={country.iso2}></option>
						))}
					</datalist>
					<div id="countryError" className="form-text"></div>
				</div>
				{/* <!-- PROVINCE --> */}
				<div className="form-input d-flex flex-column">
					<div className="d-flex justify-content-between">
						<label htmlFor="state_iso" className="form-label">
							State/Province
						</label>
						<FontAwesomeIcon
							icon={faSpinner}
							className={`icon fa-spin ${
								this.props.stateSpinner ? "hidden" : ""
							}`}
						/>
					</div>
					<input
						list="states"
						type="text"
						name="state_iso"
						id="state_iso"
						className="form-control"
						placeholder="Search your state"
						autoComplete="off"
						onChange={this.props.handleChange("state")}
						disabled={this.props.stateDisabled}
					/>
					<datalist id="states">
						{this.props.states.map((state) => (
							<option value={state.name} key={state.iso2}></option>
						))}
					</datalist>
					<div id="stateError" className="form-text"></div>
				</div>
				{/* <!-- CITY --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="city_id" className="form-label">
						City
					</label>
					<FontAwesomeIcon
							icon={faSpinner}
							className={`icon fa-spin ${
								this.props.citySpinner ? "hidden" : ""
							}`}
						/>
					<input
						list="cities"
						type="text"
						name="city_id"
						id="city_id"
						className="form-control"
						placeholder="Search your city"
						autoComplete="off"
						onChange={this.props.handleChange("city")}
						disabled={this.props.cityDisabled}
					/>
					<datalist id="cities">
					{this.props.cities.map((city) => (
							<option value={city.name} key={city.iso2}></option>
						))}
					</datalist>
					<div id="cityError" className="form-text"></div>
				</div>
				{/* <!-- NEXT BUTTON --> */}
				<div className="form-input d-flex justify-content-end">
					<button className="btn_form" id="btn_submit" onClick={this.submit}>
						<img src={images.submit} alt="submit" />
					</button>
				</div>
			</div>
		);
	}
}
