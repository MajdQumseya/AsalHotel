$(function() {
  $("form[name='login']").validate({
    rules: { 
      username: {
        required: true,
        minlength: 5
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      username: {
        required: "Please enter your username",
        minlength: "Your username must be atleast 5 characters long"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },   
    },
    submitHandler: function(form) {
      // form.submit();
    }
  });
});