import React from "react";
import images from "./../assets/images";

const RegisterForm = () => {
	return (
		<section className="row form-section">
			{/* <!-- STEPS --> */}
			<ul className="steps">
				<li className="active step" data-step-id="1">
					<a href="#"></a>
				</li>
				<li className="step-line" data-step-id="1"></li>
				<li className="step" data-step-id="2">
					<a href="#"></a>
				</li>
				<li className="step-line" data-step-id="2"></li>
				<li className="step" data-step-id="3">
					<a href="#"></a>
				</li>
			</ul>
			<form className="register-form" method="POST">
				<div className="col-10 offset-1 my-5 form-wrapper row test py-5">
					{/* <!-- STEP I --> */}
					<div className="col-10 offset-1 form-step" data-step-id="1">
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
							<div id="emailError" className="form-text"></div>
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
							<label htmlFor="pass" className="form-label">
								Pass
							</label>
							<input
								type="text"
								name="pass"
								id="pass"
								className="form-control"
								autoComplete="off"
							/>
							<div id="emailError" className="form-text"></div>
						</div>
						{/* <!-- PASS CONFIRMATION --> */}
						<div className="form-input d-flex flex-column pt-lg-3">
							<label htmlFor="pass_confirmation" className="form-label">
								Pass Confirm
							</label>
							<input
								type="text"
								name="pass_confirmation"
								id="pass_confirmation"
								className="form-control"
								autoComplete="off"
							/>
							<div id="emailError" className="form-text"></div>
						</div>
						{/* <!-- NEXT BUTTON --> */}
						<div className="form-input d-flex justify-content-end">
							<button className="btn_form" data-step-id="1">
								<img src={images.next} alt="next step" />
							</button>
						</div>
					</div>
					{/* <!-- STEP II --> */}
					<div className="col-10 offset-1 form-step hidden" data-step-id="2">
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
								<option value="1">School</option>
								<option value="2">Example</option>
								<option value="3">Example</option>
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
					<div className="col-10 offset-1 form-step hidden" data-step-id="3">
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
							<datalist id="countries">
								<option value="Usa" />
								<option value="Canada" />
								<option value="Mexico" />
								<option value="Spain" />
							</datalist>
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
							<datalist id="states">
								<option value="Usa" />
								<option value="Canada" />
								<option value="Mexico" />
								<option value="Spain" />
							</datalist>
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
							<datalist id="cities">
								<option value="Usa" />
								<option value="Canada" />
								<option value="Mexico" />
								<option value="Spain" />
							</datalist>
							<div id="stateError" className="form-text"></div>
						</div>
						{/* <!-- NEXT BUTTON --> */}
						<div className="form-input d-flex justify-content-end">
							<button className="btn_form" id="btn_submit">
								<img src={images.submit} alt="submit" />
							</button>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default RegisterForm;
