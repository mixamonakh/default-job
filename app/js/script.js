// header
const menuHamburgerButton = document.querySelector('.menu-btn');
const blockMenu = document.querySelector('.menu');

menuHamburgerButton.addEventListener( 'click', function(){
    this.classList.toggle('active');
    blockMenu.classList.toggle('active');
});
// ! ветка кода - если есть дата атрибут с ключом close, то кнопочка будет отрабатывать и закрывать меню. Эт ветка кода для тех случев, если кнопка закрытия должна быть в самом меню
if( document.querySelector('[data-menu="close"]') ){
    const getDataMenuClose = document.querySelector('[data-menu="close"]');
    getDataMenuClose.addEventListener( 'click', function(){
        menuHamburgerButton.classList.remove('active');
        blockMenu.classList.remove('active');
    });
}

// footer-select
$('.dropdown-btn').click(function(){
    $(this).toggleClass('active');
    $(this).parents('.dropdown').find('.dropdown-inner').toggleClass('active');
});

// slow-scroll
$("a[href^='#']").on("click", function () {
    let href = $(this).attr("href");
    let getHeightHeader = $('header').outerHeight() + 10;
    $("html, body").animate({
        scrollTop: $(href).offset().top - getHeightHeader
    });

    return false;
});

var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });
  lazyLoadInstance.update();

//   slider init mobile
$('.slider_init-mobile').slick({
    dots: true,
    infinite: false,
    arrow: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });