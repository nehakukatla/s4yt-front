import React from "react";
import images from './../assets/images'

const RegisterForm = () => {
  return  <section class="row form-section">
            <form class = "auth-form register-form">
              <div class="col-8 my-4 form-wrapper row">
                <div class = "col-lg-6">
                  {/* NAME */}
                  <div class="form-input d-flex flex-column">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" id="name" class="form-control"/>
                    <div id="emailError" class="form-text"></div>
                  </div>
                  {/* EMAIL */}
                  <div class="form-input d-flex flex-column">
                    <div class="d-flex justify-content-between">
                      <label for="email" class="form-label">Email</label>
                      <i class="fa-solid fa-block-question icon fa-lg"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        title="This top tooltip is themed via CSS variables."></i>
                    </div>
                    <input type="text" name="email" id="email" class="form-control" />
                    <div id="emailError" class="form-text"></div>
                  </div>
                  {/* PASS */}
                  <div class="form-input d-flex flex-column pt-lg-2">
                    <label for="pass" class="form-label">Pass</label>
                    <input type="text" name="pass" id="pass" class="form-control"/>
                    <div id="emailError" class="form-text"></div>
                  </div>
                  {/* PASS CONFIRMATION */}
                  <div class="form-input d-flex flex-column pt-lg-3">
                    <label for="pass_confirmation" class="form-label">Pass Confirm</label>
                    <input type="text" name="pass_confirmation" id="pass_confirmation" class="form-control"/>
                    <div id="emailError" class="form-text"></div>
                  </div>
                  {/* EDUCATION */}
                  <div class="form-input d-flex flex-column pt-lg-1">
                    <label for="education" class="form-label">Education</label>
                    <select name="education" id="education" class = "form-control">
                      <option value="0" selected>Select your education</option>
                      </select>
                    <div id="educationError" class="form-text"></div>
                  </div>
                </div>
                <div class = "col-lg-6">
                  {/* SCHOOL */}
                  <div class="form-input d-flex flex-column ">
                    <label for="school" class="form-label">School</label>
                    <input type="text" name="school" id="school" class="form-control"/>
                    <div id="schoolError" class="form-text"></div>
                  </div>
                  {/* GRADE */}
                  <div class="form-input d-flex flex-column">
                    <label for="grade" class="form-label">Grade</label>
                    <select name="grade" id="grade" class="form-control">
                      <option value="0" selected>Select your grade</option>
                    </select>
                    <div id="gradeError" class="form-text"></div>
                  </div>
                  {/* COUNTRY */}
                  <div class="form-input ">
                    <label for="country" class="form-label">Country</label>
                    <input list="countries" name="country" id="country" class="form-control"  placeholder="Search your country" />
                    <datalist id="countries"></datalist>
                    <div id="countryError" class="form-text"></div>
                  </div>
                  {/* STATE */}
                  <div class="form-input">
                    <label for="state" class="form-label">State/Province</label>
                    <input list="states" name="state" id="state" class="form-control"  placeholder="Search your state"/>
                    <datalist id="states"></datalist>
                    <div id="stateError" class="form-text"></div>
                  </div>
                  {/* CITY */}
                  <div class="form-input">
                    <label for="city" class="form-label">City</label>
                    <input list="cities" name="city" id="city" class="form-control"  placeholder="Search your city"/>
                    <datalist id="cities"></datalist>
                    <div id="stateError" class="form-text"></div>
                  </div>
                </div>
                <div class="form-input d-flex justify-content-end">  
                    <input  type="image" name="register_btn" src={images.submit} class="register-btn col-3"/>
                </div> 
              </div>
            </form>
          </section>;
}

export default RegisterForm