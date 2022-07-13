import React, { Component } from "react";
import images from "./../assets/images";

export class RegisterBase extends Component {
	constructor(props) {
		super(props);
		this.state = { stepId: 1 };
	}
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
						className="form-control"
						autoComplete="off"
					/>
					<div id="nameError" className="form-text"></div>
				</div>
				{/* <!-- EMAIL --> */}
				<div className="form-input d-flex flex-column">
					<div className="d-flex justify-content-between">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<i
							className="fa-solid fa-block-question icon fa-lg"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							data-bs-custom-classname="custom-tooltip"
							title="This top tooltip is themed via CSS variables."
						></i>
					</div>
					<input
						type="text"
						name="email"
						id="email"
						className="form-control"
						autoComplete="off"
					/>
					<div id="emailError" className="form-text"></div>
				</div>
				{/* <!-- PASS --> */}
				<div className="form-input d-flex flex-column pt-lg-2">
					<label htmlFor="password" className="form-label">
						Pass
					</label>
					<input
						type="text"
						name="password"
						id="password"
						className="form-control"
						autoComplete="off"
					/>
					<div id="passwordError" className="form-text"></div>
				</div>
				{/* <!-- PASS CONFIRMATION --> */}
				<div className="form-input d-flex flex-column pt-lg-3">
					<label htmlFor="password_confirmation" className="form-label">
						Pass Confirm
					</label>
					<input
						type="text"
						name="password_confirmation"
						id="password_confirmation"
						className="form-control"
						autoComplete="off"
					/>
					<div id="passwordConfirmationError" className="form-text"></div>
				</div>
				{/* <!-- NEXT BUTTON --> */}
				<div className="form-input d-flex justify-content-end">
					<button className="btn_form" data-step-id="1">
						<img src={images.next} alt="next step" />
					</button>
				</div>
			</div>
		);
	}
}
