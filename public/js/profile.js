$(function() {
  $("form[name='user']").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 3
      },
      lastName: {
        required: true,
        minlength: 3
      },
      company: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      account: {
        required: true
      },
      username: {
        required: true,
        minlength: 5
      },
      password: {
        required: true,
        minlength: 5
      },
    },
    messages: {
      firstName: {
        required:"Please enter your name",
        minlength: "Your name must be atleast 3 characters long"
      },
      lastName: {
        required: "Please enter your lastname",
        minlength: "Your name must be atleast 3 characters long"
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email"
      },
      account: {
        required: ""   
      },
      username: {
        required: "Please enter a username",
        minlength: "Your username must be atleast 5 characters long"
      },
      children: {
        required: "Please enter a password",
        minlength: "Your username must be atleast 5 characters long"
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
  });
});