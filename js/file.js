$(".search-glass").on("click", function(){
    $(".search").addClass("searchactive");
}
)
$(".closesearch").on("click", function(){
    $(".search").removeClass("searchactive");
}
)


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})