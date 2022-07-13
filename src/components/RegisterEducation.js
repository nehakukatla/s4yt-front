import React, { Component } from "react";
import images from "./../assets/images";

export class RegisterEducation extends Component {
	constructor(props) {
		super(props);
		this.state = { stepId: 2 };
	}
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
					>
						<option value="0">Select your education</option>
					</select>
					<div id="educationError" className="form-text"></div>
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
					/>
					<div id="schoolError" className="form-text"></div>
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
					>
						<option value="0">Select your grade</option>
						<option value="1">Example</option>
						<option value="2">Example</option>
						<option value="3">Example</option>
					</select>
					<div id="gradeError" className="form-text"></div>
				</div>
				{/* <!-- NEXT BUTTON --> */}
				<div className="form-input d-flex justify-content-end">
					<button className="btn_form" data-step-id="2">
						<img src={images.next} alt="next step" />
					</button>
				</div>
			</div>
		);
	}
}
