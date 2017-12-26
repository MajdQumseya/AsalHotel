$(function() {
  $("form[name='booking']").validate({
    rules: { 
      name: {
        required: true,
        minlength: 5
      },
      checkIn: {
        required: true
      },
      checkOut: {
        required: true
      },
      people: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Please enter a hotel name",
        minlength: "Hotel name must be atleast 5 characters long"
      },
      checkIn: {
        required: "Please enter a check-in date"
      },
      checkOut: {
        required: "Please enter a check-out date"
      },
      people: {
        required: "Please enter how many people will travel"
      }    
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});