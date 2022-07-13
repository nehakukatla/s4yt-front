import React, { Component } from "react";
import images from "./../assets/images";

export class RegisterLocation extends Component {
	constructor(props) {
		super(props);
		this.state = { stepId: 3 };
	}
	render() {
		return (
			<div
				className={`col-10 offset-1 form-step ${
					this.props.step === this.state.stepId ? "" : "hidden"
				}`}
			>
				{/* <!-- COUNTRY --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="country" className="form-label">
						Country
					</label>
					<input
						list="countries"
						type="text"
						name="country"
						id="country"
						className="form-control"
						placeholder="Search your country"
						autoComplete="off"
					/>
					<datalist id="countries"></datalist>
					<div id="countryError" className="form-text"></div>
				</div>
				{/* <!-- PROVINCE --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="state" className="form-label">
						State/Province
					</label>
					<input
						list="states"
						type="text"
						name="state"
						id="state"
						className="form-control"
						placeholder="Search your state"
						autoComplete="off"
					/>
					<datalist id="states"></datalist>
					<div id="stateError" className="form-text"></div>
				</div>
				{/* <!-- CITY --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="city" className="form-label">
						City
					</label>
					<input
						list="cities"
						type="text"
						name="city"
						id="city"
						className="form-control"
						placeholder="Search your city"
						autoComplete="off"
					/>
					<datalist id="cities"></datalist>
					<div id="stateError" className="form-text"></div>
				</div>
				{/* <!-- NEXT BUTTON --> */}
				<div className="form-input d-flex justify-content-end">
					<button className="btn_form" id="btn_submit">
						<img src={images.submit} alt="submit" />
					</button>
				</div>
			</div>
		);
	}
}
