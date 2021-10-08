$(document).ready(function(){
    $('.venobox').venobox(); 
});
$('#img-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateOut: 'fadeOut',
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:3000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('#project-det-carous').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:2000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#testi-caresoul').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:2000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})





$('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:2000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


