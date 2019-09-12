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
        $("#site").toggleClass('open-menu');
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

// --------------------------------------------------------------------------------------------------------------
    $(".head-flex .user-flex").click(function() {
        $('.head-flex .user-list').slideToggle(300);
        $('.head-flex .user-block').toggleClass('open');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".head-flex .user-block").length) {
            $('.head-flex .user-list').hide();
            $('.head-flex .user-block').removeClass('open');
        }
        e.stopPropagation();
    });

    $(".mobil-menu-block .user-flex").click(function() {
        $('.mobil-menu-block .user-list-mob').slideToggle(300);
        $('.mobil-menu-block .user-block').toggleClass('open');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mobil-menu-block .user-block").length) {
            $('.mobil-menu-block .user-list-mob').hide();
            $('.mobil-menu-block .user-block').removeClass('open');
        }
        e.stopPropagation();
    });

// --------------------------------------------------------------------------------------------------------------
    $(".apg-toggle").click(function () {
        $(this).parent().toggleClass('open');
        $(this).parent().parent().find('.apg-cont').slideToggle();
    });

});//конец ready