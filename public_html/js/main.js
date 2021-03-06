$(document).ready(function () {

//team section owl carousel slider

if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            loop: true,
            mouseDrag: true,
            lazyLoad: true
        });
    }


// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end



//Validation

    if ($('.contact-form').length > 0) {
        
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                   
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true,
                        maxlength: 255

                    }
                },
                messages: {
                    name: {
                        required: 'Name* is required field!!!'
                    },
                    email: {
                        required: 'Email* is required field!!!',
                        email: 'Please insert valid Email address!!!'
                    },
                    subject: {
                        required: 'The Subject* is required field.'
                    },
                    message: {
                        required: 'Message* is required field!!!',
                        maxlength: 'Max Message length is 255 characters !!!'

                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }// Validation








});