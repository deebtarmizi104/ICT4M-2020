$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $("nav").addClass("fixed-header");
        $("nav div").addClass("visible-title");
    }
    else {
        $("nav").removeClass("fixed-header");
        $("nav div").removeClass("visible-title");

    }
});

// Set the date we're counting down to
var countDownDate = new Date("March 23, 2020 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function addZero(num){
   if (num < 10){
      num = "0" + num;
      return num;
   } else {
     return num;
     }
}

  // Output the result in an element with id="countdown"
  document.getElementById("date").innerHTML = addZero(days) ;
  document.getElementById("hour").innerHTML = addZero(hours) ;
  document.getElementById("min").innerHTML = addZero(minutes);
  document.getElementById("sec").innerHTML = addZero(seconds);

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's Today!!";
  }
}, 1000);
