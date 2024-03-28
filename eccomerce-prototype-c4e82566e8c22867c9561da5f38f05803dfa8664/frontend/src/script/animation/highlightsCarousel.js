$(document).ready(function () {
  $(".container-destaques").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "ondemand",
    autoplaySpeed: 2500, // Altera automaticamente a cada 2,5 segundos (2500ms)
    adaptiveHeight: true,
    pauseOnHover: true,
    touchMove: true,
    useCSS: true,
    variableWidth: true,
  });
});
