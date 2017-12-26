$(function() {
  $("form[name='registration']").validate({
    rules: {
      name: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      checkIn: {
        required: true
      },
      checkOut: {
        required: true
      },
      adults: {
        required: true
      },
      children: {
        required: true
      },
    },
    messages: {
      name: {
        required:"Please enter your name",
        minlength: "Your name must be atleast 5 characters long"
      },
      email: {
        required: "Please enter your lastname",
        email: "Please enter a valid email address"
      },
      checkIn: {
        required: "Please enter a check in date"
      },
      checkOut: {
        required: "Please enter a check out date"    
      },
      adults: {
        required: "Please enter the amount of adults"
      },
      children: {
        required: "Please enter the amount of children"
      },
    },
    submitHandler: function(form) {
      form.submit();
    },
  });
});

$(function() {
  $("form[name='newsletter']").validate({
    rules: {
      mail: {
        required: true,
        email: true
      }
    },
    messages: {
      mail: {
        required: "Please enter your email",
        email: "Please enter a valid email address"
      }
    },
    submitHandler: function(form) {
      form.submit();
    },
  });
});