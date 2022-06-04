import React from "react";
import { useForm } from "react-hook-form";
import "./libs/bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./css/login.css";
import "./css/reset.css";
import "./css/s4yt.css";

function Register() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <body>
      <header>
        <div className="col-8 offset-2 col-sm-4 offset-sm-0 col-lg-4 offset-lg-0 logo">
          <img src="./assets/logo S4YT.png" alt="Logo S4YT" />
        </div>
        <div className="col-8 offset-2 col-sm-6 offset-sm-0 title-div py-2">
          <h1 className="title">Register</h1>
        </div>
      </header>
      <section className="row form-section">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-8 my-4 form-wrapper">
            <div className="form-input d-flex flex-column">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                placeholder="name"
                {...register("name", { required: true })}
                required
              />
            </div>
            <div className="form-input d-flex flex-column">
              <div className="d-flex justify-content-between">
                <label for="email" className="form-label">
                  Email
                </label>
                <i
                  className="fa-solid fa-block-question icon fa-lg"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-custom-className="custom-tooltip"
                  title="This top tooltip is themed via CSS variables."
                ></i>
              </div>
              <input
                placeholder="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "invalid email address",
                  },
                })}
                type="email"
                required
              />
            </div>
            <div className="form-input d-flex flex-column">
              <label for="pass" className="form-label">
                Password
              </label>
              <input
                placeholder="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters long",
                  },
                })}
                type="password"
                required
              />
            </div>
            <div className="form-input d-flex flex-column">
              <label for="pass_confirmation" className="form-label">
                Pass Confirm
              </label>
              <input
                placeholder="confirm password"
                {...register("passwordConfirmation", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value)
                      return "Passwords do not match";
                  },
                })}
                type="password"
                required
              />
              <div className="form-input d-flex flex-column">
                <label for="education" className="form-label">
                  Education
                </label>
                <select {...register("gender")}>
                  <option value="school">school</option>
                  <option value="other1">other1</option>
                  <option value="other2">other2</option>
                </select>
              </div>
              <div className="form-input d-flex flex-column">
                <label for="school" className="form-label">
                  School
                </label>
                <input
                  placeholder="school"
                  {...register("school", { required: true })}
                  required
                  type="text"
                />
              </div>
              <div className="form-input d-flex flex-column">
                <label for="grade" className="form-label">
                  Grade
                </label>
                <input
                  placeholder="grade"
                  {...register("grade", {
                    required: true,
                    min: 0,
                    max: 12,
                  })}
                  type="number"
                />
              </div>
              <div className="form-input mt-lg-2">
                <label for="country" className="form-label">
                  Country
                </label>
                <input
                  placeholder="country"
                  {...register("country", {
                    required: true,
                  })}
                  list="countries"
                />
                <datalist id="countries">
                  <option value="Usa" />
                  <option value="Canada" />
                  <option value="Mexico" />
                  <option value="Spain" />
                </datalist>
              </div>
              <div className="form-input mt-lg-2">
                <label for="state" className="form-label">
                  State/Province
                </label>
                <input
                  placeholder="states"
                  {...register("states", {
                    required: true,
                  })}
                  list="states"
                />
                <datalist id="states">
                  <option value="Usa" />
                  <option value="Canada" />
                  <option value="Mexico" />
                  <option value="Spain" />
                </datalist>
              </div>
              <div className="form-input mt-lg-2">
                <label for="city" className="form-label">
                  City
                </label>
                <input
                  placeholder="city"
                  {...register("city", {
                    required: true,
                  })}
                  list="city"
                />
                <datalist id="city">
                  <option value="Usa" />
                  <option value="Canada" />
                  <option value="Mexico" />
                  <option value="Spain" />
                </datalist>
              </div>
              <div className="form-input d-flex justify-content-end">
                <input type="submit" />
              </div>
            </div>
          </div>
        </form>
      </section>
    </body>
  );
}

export default Register;
