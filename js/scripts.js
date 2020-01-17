const text = document.querySelector(".main-text");

var n = 0;
let timer = setInterval(onTick, 2500);

function onTick() {
  if (n === 0) {
    text.innerHTML = " Hi there! I'm <span >Rajeev</span>";

    n = 1;
    return;
  }
  if (n === 4) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs" ">Rajeev.</span>';

    n = 1;
    return;
  } else if (n == 1) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs">a Developer.</span>';
    n = 2;
    return;
  } else if (n == 2) {
    text.innerHTML =
      ' Hi there! I\'m <span class="jobs">a Motion Artist.</span>';
    n = 3;
    return;
  } else if (n == 3) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs">a Game Dev.</span>';
    n = 4;
    return;
  }
}
//to prevent autoscroll to bottom on refresh
$(window).on("load", function() {
  $(window).scrollTop(0);
  $(".loader-wrapper")
    .delay(3000)
    .fadeOut("medium");

  $(".home-text").fadeOut("fast");

  $(".home-text")
    .delay(4000)
    .fadeIn("slow");
});
