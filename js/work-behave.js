


$(document).ready(function(){

    $('body').css('display', 'none');
    $('body').fadeIn(500);

    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);


    $(".close, .tap-close").click(function() {
        $(".modal-container").css("display", "none");
        $(".dark-bg").hide();
    });

    $(".work1").click(function() {
        $(".work1-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work1-modal").fadeIn(400);   
    });

    $(".work2").click(function() {
        $(".work2-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work2-modal").fadeIn(9000);
    });
    $(".work3").click(function() {
        $(".work3-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work3-modal").fadeIn(400);
    });
    $(".work4").click(function() {
        $(".work4-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work4-modal").fadeIn(400);
    });

    $(".work5").click(function() {
        $(".work5-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work5-modal").fadeIn(400);
    });
     $(".work6").click(function() {
        $(".work6-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work6-modal").fadeIn(400);
    });

    $(".work7").click(function() {
        $(".work7-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work7-modal").fadeIn(400);
    });
    $(".work8").click(function() {
        $(".work8-modal").css("display", "flex");
        $(".dark-bg").fadeIn(400);
        $(".work8-modal").fadeIn(400);
    });
});


// Working on mobile modal scrolling only when needed -- We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


//Function to the css rule
function checkSize(){
    if (
        $(".grid-contain").css("grid-template-columns") == "50vw" &&
        $(".work8").mouseover()
        ){
            $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        }    
     else if (
         $(".grid-contain").css("grid-template-columns") == "repeat(2, 28vw)" &&
         $(".work7, .work8").mouseover()
        ){
            $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        }
}
