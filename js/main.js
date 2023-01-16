//-------------------open&closeNav-------------------
//header
$("#open").click(function() {

    $(".sidenav").css("width", "250px");
    $("#main").css("marginLeft", "250px");
})
$("#close").click(function() {
    // $(".sidenav").css("width", "0px");
    // $("#main").css("marginLeft", "0px")
    let navWidth = $(".sidenav").outerWidth();
    $(".sidenav").animate({ "left": -navWidth }, 300);
    $("#main").animate({ "marginLeft": "0px" }, 300);

})

// $(".close").click(function() {
//     let navWidth = $("nav").outerWidth();
//     $("nav").animate({ "left": -navWidth }, 1000);
//     $(".open").animate({ "left": "0" }, 1000);


// })
// $(".open").click(function() {
//         let navWidth = $("nav").outerWidth();
//         $(".open").animate({ "left": "17%" }, 1000)
//         $("nav").removeClass("d-none")
//         $("nav").animate({ "left": "0px" }, 1000);

//     })
//------------- smothScroling-----------------------------------------   
$(".nav-link").click(function() {
    let currentLink = $(this).attr("href");
    let currentOffSet = $(currentLink).offset().top;
    $("html,body").animate({ scrollTop: currentOffSet }, 2000)
})

//---------------acc--------------------------------
$(".singer-info").hide();
// $("h3").click(function() {

//     if ($(this).next().hasClass("show")) {
//         $(this).next().removeClass('show');
//         $(this).next().slideUp(300)

//     } else {
//         $(this).next().removeClass("show");
//         $(this).next().slideUp(300);
//         $(this).next().toggleClass('show');
//         $(this).next().slideToggle(300);

//     }

// })
$(" h3").click(function() {

    $(this).next().slideToggle(500);
    $(".singer-info").not($(this).next()).slideUp(500);

});
//-------------counter----------------------------------------------------
function counter() {
    $('#example').countdown({
        date: '2/2/2022 20:59:59'

    }, function() {
        setTimeout(countdown, 1000);
    });
}
counter();
//------------------------textAreaRemaining---------------------------------
let max_length = 100;
$("#span").text(max_length);
$("#floatingTextarea2").keyup(function() {
    let len = max_length - $(this).val().length;
    if (len == 0) {
        alert("max_length=100")
    } else {
        $("#span").text(len);
    }

})