$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });


    //typing animation scripts
    var typed = new Typed(".typing", {
        strings: ['Developer', 'Programmer','Designer','Learner','Engineer'],
        typeSpeed:120,
        backspeed:70,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings: ['Developer', 'Programmer','Designer','Engineer','Learner'],
        typeSpeed:120,
        backspeed:70,
        loop:true
    });

    function sendEmail() {
        var senderEmail = document.getElementById('senderEmail').value;
        var subject = document.getElementById('subject').value;
        var body = document.getElementById('Body').value;

        var link = "mailto:13rishabhtiwari@gmail.com"
        + "?cc="+senderEmail
        + "&subject=" + escape(subject)
        + "&body=" + escape(body)

        console.log(senderEmail+" "+subject+" "+ body);
        window.location.href = link;
    }

    var temp = document.getElementById("msg-btn");
    temp.addEventListener("click",sendEmail);
    
    // owl carousal scripts
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeout:200,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600: {
                items:2,
                nav:false
            },
            1000: {
                items:3,
                nav:false
            }
        }
    });
})
