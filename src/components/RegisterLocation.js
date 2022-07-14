import React, { Component } from "react";
import images from "./../assets/images";

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
					<label htmlFor="country_iso" className="form-label">
						Country
					</label>
					<input
						list="countries"
						type="text"
						name="country_iso"
						id="country_iso"
						className="form-control"
						placeholder="Search your country"
						autoComplete="off"
						onChange={this.props.handleChange("country_iso")}
					/>
					<datalist id="countries"></datalist>
					<div id="countryError" className="form-text"></div>
				</div>
				{/* <!-- PROVINCE --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="state_iso" className="form-label">
						State/Province
					</label>
					<input
						list="states"
						type="text"
						name="state_iso"
						id="state_iso"
						className="form-control"
						placeholder="Search your state"
						autoComplete="off"
						onChange={this.props.handleChange("state_iso")}
					/>
					<datalist id="states"></datalist>
					<div id="stateError" className="form-text"></div>
				</div>
				{/* <!-- CITY --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="city_id" className="form-label">
						City
					</label>
					<input
						list="cities"
						type="text"
						name="city_id"
						id="city_id"
						className="form-control"
						placeholder="Search your city"
						autoComplete="off"
						onChange={this.props.handleChange("city_id")}
					/>
					<datalist id="cities"></datalist>
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
