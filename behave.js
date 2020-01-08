$(document).ready(function(){
  $("#topline_bg")
  .delay(2000)
  .animate({ height:"87vmin", top: "13vmin", easing: "easeinQuad"},800)
  .delay(7800)
  .animate({height: "2vmin", easing: "easeinQuad"}, 600);

  $("#mainLogo").delay(2000).animate({
    top: "0vh", 
    width: "15vmax", 
    left: ".25vw",
    easing: "easeinQuad" }, 800);

    $(".pushbox").delay(4950)
    .animate({ width: "100vw", easing: "easeinBounce" }, 600)
    .animate({ left: "0vw", width: "3vw", easing: "easeinBounce"}, 600)
    .delay(1450)
    .animate({ width: "100vw", easing: "easeinBounce" }, 600)
    .animate({ left: "97vw", width: "3vw", easing: "easeinBounce" }, 600)
    .delay(1700)
    .animate({ left: "78vw", width: "22vw", easing: "easeinBounce"}, 200)
    .animate({ left: "88vw", width: "12vw", easing: "easeinBounce"}, 200);

    $(".navbox").delay(10900).show(100);
    $(".pushbox").delay(10900).hide(100);
  
  
    $("#mess1")
    .delay(5050)
    .animate({ left: "-60vw" }, 600 );
  
    $("#mess2")
    .delay(5050)
    .animate({ left: "20vw"  }, 600)
    .delay(2050)
    .animate({ left: "101vw"}, 600);

    $("#mess3")
    .delay(8000)
    .animate({ left: "15vw" }, 600)
    .delay(2000)
    .animate({ left: "-70vw"}, 400);

    $("#mess4")
    .delay(9800)
    .animate({opacity: "1"}, 400)
    .delay(400)
    .animate({ left: "-70vw"}, 400);

  });


 
