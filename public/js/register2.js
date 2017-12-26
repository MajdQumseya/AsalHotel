$(function() {
  $("form[name='registration']").validate({
    rules: {
      name: {
        required: true,
        minlength: 5
      },
      username: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      account: "required"
    },
    messages: {
      name: {
        required:"Please enter your name",
        minlength: "Your name must be atleast 5 characters long"
      },
      username: {
        required: "Please enter your lastname",
        minlength: "Your username must be atleast 5 characters long"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address",
      account: ""     
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});

