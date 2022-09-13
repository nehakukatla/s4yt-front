import React, { Component } from "react";
import { RegisterBase } from "./RegisterBase";
import { RegisterEducation } from "./RegisterEducation";
import { RegisterLocation } from "./RegisterLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "./../config/axios";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      submitDisable: false,
      registered: {
        status: false,
        primary: "",
        secondary: "",
      },
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        education: "",
        school: "",
        grade: "",
        country: "",
        country_iso: "",
        state: "",
        state_iso: "",
        city: "",
        city_id: "",
      },
      errors: {
        errorsHidden: true,
        registerBase: true,
        registerEducation: true,
        registerLocation: true,
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
      },
      registerBase: {
        error: false,
        next: false,
      },
      registerEducation: {
        error: false,
        next: false,
        schoolHidden: true,
        educationCollection: [],
        educationDisabled: true,
        educationSpinner: true,
        gradeCollection: [],
        gradeDisabled: true,
        gradeSpinner: true,
      },
      registerLocation: {
        error: false,
        countryCollection: [],
        countryDisabled: true,
        countrySpinner: true,
        stateCollection: [],
        stateDisabled: true,
        stateSpinner: false,
        cityCollection: [],
        cityDisabled: true,
        citySpinner: false,
      },
    };
    this.toggleStep = this.toggleStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.setEducationCollection = this.setEducationCollection.bind(this);
    this.setGradeCollection = this.setGradeCollection.bind(this);
    this.setCountryCollection = this.setCountryCollection.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
   * Method set education endpoint API response in state.
   */
  setEducationCollection = (educationCollection) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        registerEducation: {
          ...prevState.registerEducation,
          educationCollection: educationCollection,
          educationDisabled: false,
          educationSpinner: false,
        },
      };
    });
  };

  /*
   * Method set grades endpoint API response in state.
   */
  setGradeCollection = (gradeCollection) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        registerEducation: {
          ...prevState.registerEducation,
          gradeCollection: gradeCollection,
          gradeDisabled: false,
          gradeSpinner: false,
        },
      };
    });
  };

  /*
   * Method set education endpoint API response in state.
   */
  setCountryCollection = (countryCollection) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        registerLocation: {
          ...prevState.registerLocation,
          countryCollection: countryCollection,
          countryDisabled: false,
          countrySpinner: false,
        },
      };
    });
  };

  /*
   * Method handles changes from the step list element.
   */
  toggleStep = (e) => {
    const stepId = parseInt(e.target.getAttribute("data-step-id"));
    console.log(stepId);
    if (!isNaN(stepId)) {
      this.setState((prevState) => {
        return {
          ...prevState,
          step: stepId,
        };
      });
    }
  };

  /*
   * Method handles changes from the next button.
   */
  nextStep = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: this.state.step + 1,
        registerBase: {
          ...prevState.registerBase,
          next: this.state.step === 1 || this.state.registerBase.next,
        },
        registerEducation: {
          ...prevState.registerEducation,
          next: this.state.step === 2 && this.state.registerBase.next,
        },
      };
    });
  };

  /*
   * Method handles changes event in form inputs
   */
  handleChange = (input) => (e) => {
    // update state formData value
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: {
          ...prevState.formData,
          [input]: e.target.value,
        },
      };
    });

    // conditional education input
    if (input === "education") {
      this.setState((prevState) => {
        return {
          ...prevState,
          registerEducation: {
            ...prevState.registerEducation,
            schoolHidden: !(e.target.value === "1"),
          },
        };
      });
    }
  };

  /*
   * Method handles changes event in country input
   */
  handleCountryChange = (e) => {
    let countryIso = null;
    let flag = false;

    this.state.registerLocation.countryCollection.map((country) => {
      if (country.name === e.target.value) {
        flag = true;
        countryIso = country.iso2;
      }
    });

    // update state
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: {
          ...prevState.formData,
          country: e.target.value,
          country_iso: flag ? countryIso : "",
          state: !flag ? "" : this.state.formData.state,
          state_iso: !flag ? "" : this.state.formData.state_iso,
          city: !flag ? "" : this.state.formData.city,
        },
        registerLocation: {
          ...prevState.registerLocation,
          stateSpinner: flag,
          stateDisabled: !flag,
          cityDisabled: true,
        },
      };
    });

    if (flag) {
      // API states endpoint
      axios
        .get("/location/states", { params: { ciso: countryIso } })
        .then((response) => {
          if (response.data.success) {
            // update state
            this.setState((prevState) => {
              return {
                ...prevState,
                registerLocation: {
                  ...prevState.registerLocation,
                  stateSpinner: false,
                  stateDisabled: false,
                  stateCollection: response.data.data.states,
                },
              };
            });
          }
        });
    }
  };

  /*
   * Method handles changes event in state input
   */
  handleStateChange = (e) => {
    let stateIso = null;
    let flag = false;
    this.state.registerLocation.stateCollection.map((state) => {
      if (state.name === e.target.value) {
        flag = true;
        stateIso = state.iso2;
      }
    });

    // update state
    this.setState((prevState) => {
      return {
        ...prevState,
        formData: {
          ...prevState.formData,
          state: e.target.value,
          state_iso: flag ? stateIso : "",
          city: !flag ? "" : this.state.formData.city,
        },
        registerLocation: {
          ...prevState.registerLocation,
          citySpinner: flag,
          cityDisabled: !flag,
        },
      };
    });

    if (flag) {
      // API states endpoint
      axios
        .get("/location/cities", {
          params: { ciso: this.state.formData.country_iso, siso: stateIso },
        })
        .then((response) => {
          if (response.data.success) {
            // update state
            this.setState((prevState) => {
              return {
                ...prevState,
                registerLocation: {
                  ...prevState.registerLocation,
                  citySpinner: false,
                  cityDisabled: false,
                  cityCollection: response.data.data.cities,
                },
              };
            });
          }
        });
    }
  };

  /*
   * Method handles changes event in city input
   */
  handleCityChange = (e) => {
    let cityId = null;
    let flag = false;
    this.state.registerLocation.cityCollection.map((city) => {
      if (city.name === e.target.value) {
        cityId = city.id;
        flag = true;
      }
    });

    this.setState((prevState) => {
      return {
        ...prevState,
        formData: {
          ...prevState.formData,
          city: e.target.value,
          city_id: flag ? cityId : "",
        },
      };
    });
  };

  /*
   * Method handles register
   */
  handleSubmit = () => {
    // disable to avoid double input
    this.setState((prevState) => {
      return {
        ...prevState,
        submitDisable: true,
      };
    });

    // validate form data
    let validForm = this.validate(this.state.formData);

    if (!validForm.valid) {
      this.setState((prevState) => {
        return {
          ...prevState,
          submitDisable: false,
          errors: {
            ...prevState.errors,
            registerBase: validForm.registerBase,
            registerEducation: validForm.registerEducation,
            registerLocation: validForm.registerLocation,
            errorsHidden: false,
          },
        };
      });
    } else {
      // API register endpoint
      axios
        .post("/register", {
          name: this.state.formData.name,
            email: this.state.formData.email,
            password: this.state.formData.password,
            password_confirmation: this.state.formData.password_confirmation,
            education_id: parseInt(this.state.formData.education),
            institution: this.state.formData.school,
            grade_id: parseInt(this.state.formData.grade),
            country_iso: this.state.formData.country_iso,
            state_iso: this.state.formData.state_iso,
            city_id: parseInt(this.state.formData.city_id),
        })
        .then((response) => {
          this.setState((prevState) => {
            return {
              ...prevState,
              registered: {
                primary: response.data.success
                  ? "You did it! You're in!"
                  : "Whoops! There was an error",
                secondary: response.data.success
                  ? "Now just look for your $4YT to verify your email and join the $4YT Discord for next steps and updates!"
                  : "Please reach out in our Discord to fix it",
                status: true,
              },
            };
          });
        });
    }
  };

  /*
   * Method validates form data before submit
   */
  validate = (formData) => {
    let validate = {
      valid: true,
      registerBase: true,
      registerEducation: true,
      registerLocation: true,
    };
    // name validation
    if (
      formData.name.length == 0 ||
      formData.name == "" ||
      formData.name == null
    ) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            name: "Tell us your name",
          },
        };
      });
    }

    if (formData.name.length < 3) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            name: "This does not look like a real name",
          },
        };
      });
    }

    // email validation
    if (
      formData.email.length == 0 ||
      formData.email == "" ||
      formData.email == null
    ) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            email: "Tell us your email",
          },
        };
      });
    } else {
      let emailRegex = new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
      );
      if (!emailRegex.test(formData.email)) {
        validate.valid = false;
        validate.registerBase = false;
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: {
              ...prevState.errors,
              email: "This is not a valid email",
            },
          };
        });
      }
    }

    // password validation
    if (
      formData.password.length == 0 ||
      formData.password == "" ||
      formData.password == null
    ) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            password: "Set your password",
          },
        };
      });
    }

    if (
      formData.password.length < 8 ) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            password: "Your password needs minimum 8 characters",
          },
        };
      });
    }

    // password_confirmation validation
    if (
      formData.password_confirmation.length == 0 ||
      formData.password_confirmation == "" ||
      formData.password_confirmation == null
    ) {
      validate.valid = false;
      validate.registerBase = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            password_confirmation: "Re-enter your password",
          },
        };
      });
    } else {
      if (formData.password !== formData.password_confirmation) {
        validate.valid = false;
        validate.registerBase = false;
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: {
              ...prevState.errors,
              password_confirmation: "Passwords do not match",
            },
          };
        });
      }
    }

    // education validation
    if (formData.education == "0" || formData.education == "") {
      validate.valid = false;
      validate.registerEducation = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            education: "Select an education",
          },
        };
      });
    } else {
      // school validation
      if (
        formData.education == "1" &&
        (formData.school.length == 0 ||
          formData.school == "" ||
          formData.school == null)
      ) {
        validate.valid = false;
        validate.registerEducation = false;
        this.setState((prevState) => {
          return {
            ...prevState,
            errors: {
              ...prevState.errors,
              school: "Enter your school",
            },
          };
        });
      }
    }

    // grade validation
    if (formData.grade == "0" || formData.grade == "") {
      validate.valid = false;
      validate.registerEducation = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            grade: "Select your grade",
          },
        };
      });
    }

    // country validation
    if (formData.country_iso == "") {
      validate.valid = false;
      validate.registerLocation = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            country: "Enter a valid country",
          },
        };
      });
    }

    // state validation
    if (formData.state_iso == "") {
      validate.valid = false;
      validate.registerLocation = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            state: "Enter a valid state",
          },
        };
      });
    }

    // city validation
    if (formData.city_id == "") {
      validate.valid = false;
      validate.registerLocation = false;
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: {
            ...prevState.errors,
            city: "Enter a valid city",
          },
        };
      });
    }
    return validate;
  };

  render() {
    return (
      <section className="row form-section">
        {/* step list element */}
        <ul className="steps">
          <li
            className={`step ${
              this.state.step === 1 || this.state.registerBase.next
                ? "active"
                : ""
            }`}
            data-step-id="1"
            onClick={this.toggleStep}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className={`error-icon ${
                this.state.errors.registerBase ? "hidden" : ""
              }`}
              data-step-id="1"
            />
          </li>
          <li
            className={`step-line ${
              this.state.registerBase.next ? "active" : ""
            }`}
          ></li>
          <li
            className={`step ${
              this.state.step === 2 || this.state.registerBase.next
                ? "active"
                : ""
            }`}
            data-step-id="2"
            onClick={this.toggleStep}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className={`error-icon ${
                this.state.errors.registerEducation ? "hidden" : ""
              }`}
              data-step-id="2"
            />
          </li>
          <li
            className={`step-line ${
              this.state.registerBase.next ? "active" : ""
            }`}
          ></li>
          <li
            className={`step ${
              this.state.step === 3 || this.state.registerEducation.next
                ? "active"
                : ""
            }`}
            data-step-id="3"
            onClick={this.toggleStep}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className={`error-icon ${
                this.state.errors.registerLocation ? "hidden" : ""
              }`}
              data-step-id="3"
            />
          </li>
        </ul>
        <form className="register-form" method="POST">
          <div className="col-10 offset-1 my-5 form-wrapper row test">
            <RegisterBase
              step={this.state.step}
              errors={this.state.errors}
              setEducationCollection={this.setEducationCollection}
              setGradeCollection={this.setGradeCollection}
              handleChange={this.handleChange}
              nextStep={this.nextStep}
            />
            <RegisterEducation
              step={this.state.step}
              errors={this.state.errors}
              registerEducation={this.state.registerEducation}
              setCountryCollection={this.setCountryCollection}
              handleChange={this.handleChange}
              nextStep={this.nextStep}
            />
            <RegisterLocation
              step={this.state.step}
              errors={this.state.errors}
              registerLocation={this.state.registerLocation}
              state={this.state.formData.state}
              city={this.state.formData.city}
              registered={this.state.registered}
              handleChange={this.handleChange}
              handleCountryChange={this.handleCountryChange}
              handleStateChange={this.handleStateChange}
              handleCityChange={this.handleCityChange}
              handleSubmit={this.handleSubmit}
              submitDisable={this.state.submitDisable}
            />
          </div>
        </form>
      </section>
    );
  }
}
