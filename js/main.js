jQuery( document ).ready(function($){

// --------------------------------------------------------------------------------------------------------------
    $(".faq-title").click(function () {
        if (!$(this).hasClass('active')) {
            $(".faq-title").removeClass('active');
            $(this).addClass('active');
            $(".faq-text").slideUp(300);
            $(this).next('.faq-text').slideDown(300);
        }

    });

//Меню в мобильной версии -----------------------------------------------------------------------------------------
    $(".menu-icon").click(function () {
        $("#site").addClass('open-menu');
    });

    $(".close-menu").click(function () {
        $("#site").removeClass('open-menu');
    });
    
// --------------------------------------------------------------------------------------------------------------
    if ($(window).width() < 768) {
        $(".f-title").click(function () {
            if (!$(this).hasClass('active')) {
                $(".f-title").removeClass('active');
                $(this).addClass('active');
                $(".f-script").slideUp(300);
                $(this).next('.f-script').slideDown(300);
            }
        });
    }
    
// --------------------------------------------------------------------------------------------------------------
    $(".dop-menu-icon").click(function () {
        $(this).toggleClass('active');
        $(".dop-menu").slideToggle(300);
    });

// --------------------------------------------------------------------------------------------------------------
    $( ".select" ).selectmenu();

// --------------------------------------------------------------------------------------------------------------
    $(".ap-menu").accordion({
        accordion:true,
        speed: 300,
        closedSign: '',
        openedSign: ''
    });

    if ($(window).width() < 768) {
        $(".apm-btn").click(function () {
            $('.ap-menu-block').toggle(300);
        });
        $(document).on('click', function (e) {
            if (!$(e.target).closest(".ap-sidebar").length) {
                $('.ap-sidebar .ap-menu-block').hide(300);
            }
            e.stopPropagation();
        });
    }

// --------------------------------------------------------------------------------------------------------------
    $(".toggle-row").click(function () {
        $(this).parent().parent().toggleClass('open');
    });

});//конец ready