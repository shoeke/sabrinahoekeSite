$(document).ready(function(){
  $("#topline_bg")
  .delay(2000)
  .animate({ height:"87vmin", top: "13vmin", easing: "easeinQuad"},800)
  .delay(7800)
  .animate({height: "2vmin", easing: "easeinQuad"}, 600);

  $("#mainLogo").delay(2000).animate({
    top: "1vh", 
    width: "24vmin",
    height: "11vmin",
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

    $(".navbox").delay(10900).animate({opacity: "1"},100);
    $(".pushbox").delay(10900).fadeOut(100);
  
  
    $("#mess1")
    .delay(5050)
    .animate({ left: "-60vw" }, 600 );
  
    $("#mess2")
    .delay(5050)
    .animate({ left: "20vw"  }, 600)
    .delay(2050)
    .animate({ left: "101vw"}, 600)
    .hide(00);

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

    $(".bg")
    .delay(10600)
    .slideDown(1200);

    //menu enter

    $("#navli1")
    .delay(11000)
    .animate({marginLeft: "1vw", easing: "easein"}, 400);

    $("#navli2")
    .delay(11100)
    .animate({marginLeft: "1vw", easing: "easein"}, 200);

    $("#navli3")
    .delay(11200)
    .animate({marginLeft: "1vw", easing: "easein"}, 200);

    $("#navli4")
    .delay(11300)
    .animate({marginLeft: "1vw", easing: "easein"}, 200);

    $("#navli5")
    .delay(11400)
    .animate({marginLeft: "1vw", easing: "easein"}, 200);

    $(".tagline").delay(11200).fadeIn(1000);

   
  });
  
  function pageRedirect() {
    window.location.replace("https://sabrinahoeke.com/staticHome/");
}      
setTimeout("pageRedirect()", 13000);


 
