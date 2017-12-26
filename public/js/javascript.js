$(document).ready(function() {

      
    
      function statusChangeCallback(response) {
      
        
        if (response.status === 'connected') {
        
        testAPI();
        }
      }
     
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }
      window.fbAsyncInit = function() {
      FB.init({
      appId      : '1582235455199492',
      cookie     : true,  // enable cookies to allow the server to access
      // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
      });
      
      FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      });
      };
      // Load the SDK asynchronously
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));



    $(".fa-spin").addClass("hide");
    $(".btn-pref .btn").click(function() {
        $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
        $(this).removeClass("btn-default").addClass("btn-primary");
    });

    $('.edit-btn').on('click', function(argument) {
        var form = $(this).closest('form');
        for (var i = 0; i < 7; i++) {
            $('.form-control').eq(i).prop('disabled', function(i, v) { return !v; });
        }
    });



    $(function() {
        $("#nav-placeholder").load("navbar.html", function() {
            var url = window.location;
            $('ul.nav a[href="' + url + '"]').parent().addClass('active');
            $('ul.nav a').filter(function() {
                return this.href == url;
            }).parent().addClass('active');
        });

        $('.register-btn').click(function() {
            var type = ["platinum", "gold", "silver"];
            var item = type[Math.floor(Math.random() * type.length)];
            $('.navbar-right li:first-child').remove();
            $('.navbar-right li ').html('<a href="Profile.html"><i class="fa fa-star-o ' + item + '" aria-hidden="true"></i> ' + $('#username').val() + '</a>');

        })

    });

});

// date-picker
$('.input-group.date').datepicker({
    maxViewMode: 2,
    clearBtn: true,
    orientation: "top auto",
    todayHighlight: true,
    toggleActive: true
});


// img carasoul 
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// $(".img-responsive").click(function() {
//     var imgSrc = this.src;
//     var hotelName = $(this).data("name");
//     getImg(imgSrc);
// });




$('.tels-left').on('click', function(){
  var priceString = $(this).children("h4").children("span").html().replace('$', '');   
  var price = parseInt(priceString);
   
  $('.price').val(price);
});
 


  
               