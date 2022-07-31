const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
$(document).ready(function() {

  $('.form-text').hide();

  $('.step').on('click', function() {
    const step_id = $(this).data('step-id');
    const active = $(this).hasClass('active');
    // change step marker
    if (!active) {
      $('.step').removeClass('active');
      $(this).addClass('active');

    }
    toggleHiddenFormSteps(step_id, false);
  });

  $('.btn_form').on('click', function(e) {
    e.preventDefault();
    const step_id = $(this).data('step-id');

    let boxes = [];
    if (!step_id) {
      return 0;
    }


    if (step_id === 1) {
      boxes.push({ header: "name", value: document.getElementById("name").value })
      boxes.push({ header: "email", value: document.getElementById("email").value })
      boxes.push({ header: "pass", value: document.getElementById("pass").value })
      boxes.push({ header: "pass_confirmation", value: document.getElementById("pass_confirmation").value })

      //reset state of all error boxes
      document.getElementById("nameError").style.display = "none"
      document.getElementById("emailError1").style.display = "none"
      document.getElementById("emailError").style.display = "none"
      document.getElementById("passwordError").style.display = "none"
      document.getElementById("passwordConfirmationError").style.display = "none"
      document.getElementById("emailError").style.display = "none"
    } else if (step_id === 2) {
      // only need to validate school
      boxes.push({ header: "school", value: document.getElementById("school").value })
    }
    console.log(boxes);
    // validate data
    let validated
    if (step_id === 1) {
      let results = validate1(boxes)
      console.log(results)
      switch (results.code) {
        case 1:
          document.getElementById("nameError").style.display = "block"
        case 2:
          document.getElementById("emailError1").style.display = "block"
        case 3:
          document.getElementById("passwordError").style.display = "block"
        case 4:
          document.getElementById("passwordConfirmationError").style.display = "block"
        case 5:
          document.getElementById("emailError").style.display = "block"
        case 6:
          document.getElementById("passwordConfirmationError1").style.display = "block"
        default:
          break;
      }
      validated = results.validated;
    } else if (step_id === 2) {
      let results = validate2(boxes)
      console.log(results)
      switch (results.code) {
        case 1:
          document.getElementById("schoolError").style.display = "block"
        default:
          break;
      }
      validated = results.validated;
    }
    // move next step
    $('.step[data-step-id="' + (step_id + 1) + '"]').addClass('active');
    $('.step-line[data-step-id="' + step_id + '"]').addClass('active');
    if (validated) {
      //change step form
      toggleHiddenFormSteps(step_id, false);
    }
  });

  const toggleHiddenFormSteps = (step_id, next) => {
    $('.form-step').addClass('hidden');
    $('.form-step[data-step-id="' + (next ? (step_id + 1) : step_id) + '"]').removeClass('hidden');
  }
});

//Codes are to signify which if statement failed. 
//  1: name field is unfilled
//  2: email field is unfilled
//  3: password field is unfilled
//  4: password confirmation field is unfilled
//  5: email doesn't follow regex
//  6: password confirmation doesn't equal password
function validate1(data) {
  if (data[0].value === "") return { validated: false, code: 1 };
  if (data[1].value === "") return { validated: false, code: 2 };
  if (data[2].value === "") return { validated: false, code: 3 };
  if (data[3].value === "") return { validated: false, code: 4 };
  if (!emailValidation.test(data[1].value)) return { validated: false, code: 5 };
  if (!data[3].value == data[2].value) {
    console.log(data[3].value);
    console.log(data[2].value);
    return { validated: false, code: 6 }
  };
  return { validated: true, code: 0 }
}

//Codes are to signify which if statement failed. 
//  1: school field is unfilled
function validate2(data) {
  if (data[0].value === "") return { validated: false, code: 1 };
  return { validated: true, code: 0 }
}
