import React, { Component } from "react";
import images from "./../assets/images";

export class RegisterEducation extends Component {
	constructor(props) {
		super(props);
		this.state = { stepId: 2 };
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
					<label htmlFor="education" className="form-label">
						Education
					</label>
					<select
						name="education"
						id="education"
						className="form-control"
						autoComplete="off"
						onChange={this.props.handleChange("education")}
					>
						<option value="0">Select your education</option>
					</select>
					<div id="educationError" className="form-text">
						{this.props.errors.education}
					</div>
				</div>
				{/* <!-- SCHOOL --> */}
				<div className="form-input d-flex flex-column ">
					<label htmlFor="school" className="form-label">
						School
					</label>
					<input
						type="text"
						name="school"
						id="school"
						className="form-control"
						autoComplete="off"
						onChange={this.props.handleChange("school")}
					/>
					<div id="schoolError" className="form-text">
						{this.props.errors.school}
					</div>
				</div>
				{/* <!-- GRADE --> */}
				<div className="form-input d-flex flex-column">
					<label htmlFor="grade" className="form-label">
						Grade
					</label>
					<select
						name="grade"
						id="grade"
						className="form-control"
						autoComplete="off"
						onChange={this.props.handleChange("grade")}
					>
						<option value="0">Select your grade</option>
					</select>
					<div id="gradeError" className="form-text">
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
