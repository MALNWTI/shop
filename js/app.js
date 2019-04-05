$(function(){
  /*SLider*/
  $(".previews_slick").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    arrows: false,
    speed: 1000,
    dots: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  /*Slider Close*/

  /*show button*/
  $("#ShowMore").on("click",function(event) {
    event.preventDefault();
    $("#list_top").removeClass("max_h");
  });
  $("#ShowMor").on("click",function(event) {
    event.preventDefault();
    $("#product_list").removeClass("max_he");
  });
  /*show button*/

  //Відсортування!!!
  $('.categories_bottom button').click(function(){
    var get_id = this.id;
    var get_current = $('.product_list .' + get_id);
    $('.list_item').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#All').click(function(){
    $('.list_item').show(500);
  });
  //Відсортування кінець

});
