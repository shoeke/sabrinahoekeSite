


    $(document).ready(function() {
            $("body").css("display", "none")
            $("body").fadeIn(500);

            $("#hamburger").click(function(){
                $(".nav-mobile").slideToggle(400);
            })


    });

    function hgsubmit() {
        if (/\S+/.test(document.hgmailer.name.value) == false) alert("Please provide your name.");
        else if (/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(document.hgmailer.email.value) == false) alert("A valid email address is required.");
        else if (/\S+/.test(document.hgmailer.comment.value) == false) alert("Your email content is needed.");
        else {
            document.hgmailer.submit();
            alert(' Thank you! \n Your email is sent.');
        }
    }
 

