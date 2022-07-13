import React, { Component } from "react";
import { RegisterBase } from "./RegisterBase";
import { RegisterEducation } from "./RegisterEducation";
import { RegisterLocation } from "./RegisterLocation";

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			name: "",
			email: "",
			password: "",
			password_confirmation: "",
			education: "",
			school: "",
			grade: "",
			country: "",
			state: "",
			city: "",
		};
		this.toggleStep = this.toggleStep.bind(this);
	}

	toggleStep = (e) => {
		const stepId = e.target.getAttribute("data-step-id");
		const { step } = this.state;
		this.setState({
			step: parseInt(stepId),
		});
	};

	render() {
		const { step } = this.state;
		return (
			<section className="row form-section">
				{/* <!-- STEPS --> */}
				<ul className="steps">
					<li
						className={`step ${step === 1 ? "active" : ""}`}
						data-step-id="1"
						onClick={this.toggleStep}
					>
						<a href="#"></a>
					</li>
					<li className="step-line" data-step-id="1"></li>
					<li
						className={`step ${step === 2 ? "active" : ""}`}
						data-step-id="2"
						onClick={this.toggleStep}
					>
						<a href="#"></a>
					</li>
					<li className="step-line" data-step-id="2"></li>
					<li
						className={`step ${step === 3 ? "active" : ""}`}
						data-step-id="3"
						onClick={this.toggleStep}
					>
						<a href="#"></a>
					</li>
				</ul>
				<form className="register-form" method="POST">
					<div className="col-10 offset-1 my-5 form-wrapper row test">
						<RegisterBase step={this.state.step} />
						<RegisterEducation step={this.state.step} />
						<RegisterLocation step={this.state.step} />
					</div>
				</form>
			</section>
		);
	}
}
