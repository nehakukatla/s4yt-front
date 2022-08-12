import React, { Component } from "react";
import { RegisterBase } from "./RegisterBase";
import { RegisterEducation } from "./RegisterEducation";
import { RegisterLocation } from "./RegisterLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "./../config/axios";
//import env from "react-dotenv";

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
			country: "" /* country input */,
			country_iso: "" /* country_iso hidden */,
			state_iso: "",
			city_id: "",
			base: {
				next: false,
				error: false,
				errors: {
					name: "",
					email: "",
					password: "",
					password_confirmation: "",
				},
			},
			educationStep: {
				next: false,
				error: false,
				errors: {
					education: "",
					school: "",
					grade: "",
				},
				school_hidden: true,
				education_api: false,
				education: [],
				grade_api: false,
				grade: [],
			},
			location: {
				error: false,
				errors: {
					country_iso: "",
					state_iso: "",
					city_id: "",
				},
				countries: [],
				country_disabled: true,
				country_spinner_hidden: false,
				states: [],
				state_disabled: true,
				state_spinner_hidden: true,
				state_api: false,
				cities: [],
				city_disabled: true,
				city_spinner_hidden: true,
			},
		};
		this.toggleStep = this.toggleStep.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.nextStep = this.nextStep.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount() {
		axios.get("/educations").then((response) => {
			if (!response.data.success) {
				// Provide error message
			}
			this.setState((prevState) => {
				return {
					...prevState,
					educationStep: {
						...prevState.educationStep,
						education: response.data.data.educations,
						education_api: true,
					},
				};
			});
		});

		axios.get("/grades").then((response) => {
			if (!response.data.success) {
				// Provide error message
			}

			this.setState((prevState) => {
				return {
					...prevState,
					educationStep: {
						...prevState.educationStep,
						grade: response.data.data.grades,
					},
				};
			});
		});

		axios.get("/location/countries").then((response) => {
			if (!response.data.success) {
				// Provide error message
			}

			this.setState((prevState) => {
				return {
					...prevState,
					location: {
						...prevState.location,
						country_disabled: false,
						country_spinner_hidden: true,
						countries: response.data.data.countries,
					},
				};
			});
		});
	}

	toggleStep = (e) => {
		const stepId = e.target.getAttribute("data-step-id");
		this.setState({
			step: parseInt(stepId),
		});
	};

	// Handle fields change and validation
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
		if (input === "education") {
			this.setState((prevState) => {
				return {
					...prevState,
					educationStep: {
						...prevState.educationStep,
						school_hidden: !(e.target.value === "1"),
					},
				};
			});
		}

		if (input === "country") {
			this.state.location.countries.map((country) => {
				if (country.name === e.target.value) {
					// update state
					this.setState((prevState) => {
						return {
							...prevState,
							country_iso: country.iso2,
							location: {
								...prevState.location,
								state_spinner_hidden: false,
							},
						};
					});
					axios
						.get("/location/states", { params: { ciso: country.iso2 } })
						.then((response) => {
							if (!response.data.success) {
								// Provide error message
							}

							this.setState((prevState) => {
								return {
									...prevState,
									location: {
										...prevState.location,
										state_disabled: false, 
										state_spinner_hidden: true,
										states: response.data.data.states,
									},
								};
							});
						});
					}
					else if (country.name !== e.target.value){
						this.setState((prevState) => {
							document.getElementById("state_iso").value = ""
							document.getElementById("city_id").value = ""
							return {
								...prevState,
								location: {
									...prevState.location,
									state_disabled: true,
									city_disabled: true
								},
							};
						});
					}
				})
			}
			if (input === "state") {
				this.state.location.states.map((state) => {
					if (state.name === e.target.value) {
						// update state
						this.setState((prevState) => {
							return {
								...prevState,
								state_iso: state.iso2,
								location: {
									...prevState.location,
									city_spinner_hidden: false,
								},
							};
						});
						axios
							.get("/location/cities", {
								 params: {
									 ciso: this.state.country_iso, 
									 siso: state.iso2 
									}
								})
							.then((response) => {
								if (!response.data.success) {
									// Provide error message
								}

								this.setState((prevState) => {
									return {
										...prevState,
										location: {
										...prevState.location,
										city_disabled: false,
										city_spinner_hidden: true,
										cities: response.data.data.cities,										
									},
								};
							});
						});
						
				}
				else if (state.name !== e.target.value){
					this.setState((prevState) => {
						document.getElementById("city_id").value = ""
						return {
							...prevState,
							location: {
								...prevState.location,
								city_disabled: true
							},
						};
					});
				}
			})
		}
		if (input === "city") {
			this.state.location.cities.map((city) => {
				if (city.name === e.target.value) {	
					// update state
					this.setState((prevState) => {
						return {
							...prevState,
							city_id: city.id,						
							};
						});
					};
				});
			}			
};

	nextStep = () => {
		const { step } = this.state;
		console.log(step === 1);
		this.setState((prevState) => {
			return {
				...prevState,
				step: step + 1,
				base: {
					...prevState.base,
					next: step === 1 || this.state.base.next,
				},
				educationStep: {
					...prevState.educationStep,
					next: step === 2 && this.state.base.next,
				},
			};
		});
	};

	submit = () => {
		// TODO: validate form
		let validate = true;
		if (validate) {
		}
	};

	render() {
		return (
			<section className="row form-section">
				<ul className="steps">
					<li
						className={`step ${
							this.state.step === 1 || this.state.base.next ? "active" : ""
						} error`}
						data-step-id="1"
						onClick={this.toggleStep}
					>
						<FontAwesomeIcon
							icon={faXmark}
							className={`icon-error ${this.state.base.error ? "" : "hidden"}`}
						/>
					</li>
					<li
						className={`step-line ${this.state.base.next ? "active" : ""}`}
					></li>
					<li
						className={`step ${
							this.state.step === 2 || this.state.base.next ? "active" : ""
						}`}
						data-step-id="2"
						onClick={this.toggleStep}
					>
						<FontAwesomeIcon
							icon={faXmark}
							className={`icon-error ${
								this.state.education.error ? "" : "hidden"
							}`}
						/>
					</li>
					<li
						className={`step-line ${
							this.state.educationStep.next ? "active" : ""
						}`}
					></li>
					<li
						className={`step ${
							this.state.step === 3 || this.state.educationStep.next
								? "active"
								: ""
						}`}
						data-step-id="3"
						onClick={this.toggleStep}
					>
						<FontAwesomeIcon
							icon={faXmark}
							className={`icon-error ${
								this.state.location.error ? "" : "hidden"
							}`}
						/>
					</li>
				</ul>
				<form className="register-form" method="POST">
					<div className="col-10 offset-1 my-5 form-wrapper row test">
						<RegisterBase
							step={this.state.step}
							nextStep={this.nextStep}
							handleChange={this.handleChange}
						/>
						<RegisterEducation
							step={this.state.step}
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							education_api={this.state.educationStep.education_api}
							education={this.state.educationStep.education}
							grade={this.state.educationStep.grade}
							school_hidden={this.state.educationStep.school_hidden}
						/>
						<RegisterLocation
							step={this.state.step}
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							submit={this.submit}
							countryDisabled={this.state.location.country_disabled}
							countrySpinner={this.state.location.country_spinner_hidden}
							countries={this.state.location.countries}
							stateDisabled={this.state.location.state_disabled}
							stateSpinner={this.state.location.state_spinner_hidden}
							states={this.state.location.states}
							cityDisabled={this.state.location.city_disabled}
							citySpinner={this.state.location.city_spinner_hidden}
							cities={this.state.location.cities}
						/>
					</div>
				</form>
			</section>
		);
	}
}
