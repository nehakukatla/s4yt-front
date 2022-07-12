$(document).ready(function(){

 $('.form-text').hide();

 $('.step').on('click', function() {
     const step_id = $(this).data('step-id');
     const active = $(this).hasClass('active');
     // change step marker
     if(!active) {
         $('.step').removeClass('active');
         $(this).addClass('active');
         
     }
     toggleHiddenFormSteps(step_id, false);
 });
 
 $('.btn_form').on('click', function(e) {
     e.preventDefault();
     const step_id = $(this).data('step-id');
     if(!step_id){
      return 0;
     }
     // validate data
     let validate = true;
     // move next step
     $('.step[data-step-id="' + (step_id + 1) + '"]').addClass('active');
     $('.step-line[data-step-id="' + step_id + '"]').addClass('active');
     if(validate) {
      //change step form
      toggleHiddenFormSteps(step_id, true);
     }
 });

 const toggleHiddenFormSteps = (step_id, next) => {
  $('.form-step').addClass('hidden');
  $('.form-step[data-step-id="' + (next ? (step_id + 1) : step_id) + '"]').removeClass('hidden');
 }
});