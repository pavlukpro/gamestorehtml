jQuery( document ).ready(function($){

var siteWidth = $('#site')[0].getBoundingClientRect().width;
// --------------------------------------------------------------------------------------------------------------


// FAQ--------------------------------------------------------------------------------------------------------------

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

//Блоки в футере (мобильная версия) --------------------------------------------------------------------------------------------------------------
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

//Навигация по сайту --------------------------------------------------------------------------------------------------------------
    $(".dop-menu-icon").click(function () {
        $(this).toggleClass('active');
        $(".dop-menu").slideToggle(300);
    });

//Замена селекта --------------------------------------------------------------------------------------------------------------
    $( ".select" ).selectmenu();

//Меню-сайдбар --------------------------------------------------------------------------------------------------------------
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

//Таблица в мобильной версии, на страничке AP-orders.html --------------------------------------------------------------------------------------------------------------
    $(".toggle-row").click(function () {
        $(this).parent().parent().toggleClass('open');
    });

//Таблица в мобильной версии, на страничке AP-logs.html --------------------------------------------------------------------------------------------------------------
    $(".apl-arrow").click(function () {
        $(this).parent().parent().toggleClass('open');
    });

//Блок пользователя --------------------------------------------------------------------------------------------------------------
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

//Раскрытие контента на страничке AP-game.html --------------------------------------------------------------------------------------------------------------
    $(".apg-toggle").click(function () {
        $(this).parent().toggleClass('open');
        $(this).parent().parent().find('.apg-cont').slideToggle();
    });
// _________________________________________________________________________________________________________________
	if (siteWidth <= 1200) {
		$('.pageBlock_section-fastBuy > .pageBlock_item > .pageBlock_title-smaller').click(function(){
			$(this).parent().toggleClass('active');
		})
	}
	if (siteWidth <= 768) {
		$('.sm-accordeons .pageBlock_title-smaller').click(function(){
			$(this).parent().toggleClass('active');
		})
	}
	$('.pageBlock_section-fastBuy .section_col > .section-row').click(function(){
		if (siteWidth <= 768) {
			$(this).toggleClass('active');
		}
	})

//Текст инструкции в мобильной версии на странице Selection.html --------------------------------------------------------------------------------------------------------------
    $(".os-toggle-text").click(function () {
        $(this).toggleClass('open');
        $(".os-text").slideToggle(300);
    });

//Показать контакты на страничке Agent-panel.html --------------------------------------------------------------------------------------------------------------
    $(".ref-open-contact").click(function () {
        $(this).hide();
        $(this).parent().find('.ref-contact').show();
    });

// --------------------------------------------------------------------------------------------------------------
    $(".res-info-btn").click(function () {
        $(".res-info-flex").slideToggle();
    });

// --------------------------------------------------------------------------------------------------------------
    $(".gaf-toggle").click(function () {
        $(this).parent().next(".gaf-data-block").slideToggle();
    });

//Dropdowns_________________________________________________________________________________________________________________
	var dropdown_elems = document.getElementsByClassName('dropdown'),
		dropWrapper,
		itemsWrapper,
		arrow;
	for (var i = 0; i < dropdown_elems.length; i++) {
		dropdown_elems[i].addEventListener('click', function(e){

			if ( e.target.classList.contains('selected') ) {

				dropWrapper = e.target.parentElement.parentElement;
				itemsWrapper = e.target.parentElement;
				arrow = dropWrapper.querySelector('.dropdown_arrow');

				if (dropWrapper.classList.contains('active')) {
					itemsWrapper.style.height = 46 +'px';
					dropWrapper.classList.remove('active');
					setTimeout(function(){
						arrow.style.zIndex = 3;
						itemsWrapper.style.zIndex = 0;
					},300);
				} else if (dropWrapper.classList.contains('active') == false) {
					itemsWrapper.style.zIndex = 4;
					itemsWrapper.style.height = (itemsWrapper.childElementCount * 46) + 'px';
					arrow.style.zIndex = 5;
					dropWrapper.classList.add('active');
				}
			}
			else if ( e.target.classList.contains('dropdown_arrow') ) {

				dropWrapper = e.target.parentElement;
				itemsWrapper = e.target.parentElement.querySelector('.dropdown_wrapper');
				arrow = e.target;

				if (dropWrapper.classList.contains('active') == false) {
					itemsWrapper.style.zIndex = 4;
					itemsWrapper.style.height = (itemsWrapper.childElementCount * 46) + 'px';
					arrow.style.zIndex = 5;
					dropWrapper.classList.add('active');
				} else if (dropWrapper.classList.contains('active')) {
					itemsWrapper.style.height = 46 +'px';
					dropWrapper.classList.remove('active');
					setTimeout(function(){
						arrow.style.zIndex = 3;
						itemsWrapper.style.zIndex = 0;
					},300);
				}
			}
			if (e.target.classList.contains('dropdown_item') &&
				e.target.classList.contains('selected') == false) {
				var selected_now = e.target.cloneNode(true);
				var selected_was = itemsWrapper.querySelector('.dropdown_item.selected').cloneNode(true);
				selected_now.classList.add('selected');
				selected_was.classList.remove('selected');

				for (var i = 0; itemsWrapper.children[i] != e.target; i++) {
					var selected_index = i + 1;
				}
				itemsWrapper.querySelector('.dropdown_item.selected').remove();
				itemsWrapper.insertBefore(selected_now, itemsWrapper.firstChild);
				e.target.remove();
				itemsWrapper.insertBefore(selected_was, itemsWrapper.children[selected_index]);

			}
		})
	}



// --------------------------------------------------------------------------------------------------------------
});//конец ready
