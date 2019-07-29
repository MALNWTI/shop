$(function(){

  var navigation = $(".navigation"),
      header = $(".header").innerHeight(),
      scrollOffset = $(window).scrollTop();

  //Fixed header//
  checkScroll(scrollOffset);

  $(window).on("scroll", function(){
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset){
    if (scrollOffset >= header) {
      navigation.addClass("navigation--fixed");
    } else {
      navigation.removeClass("navigation--fixed");
    }
  }
  //fixed header clode//

  //burger menu//
  $(".navigation_toggle").click(function() {
    $(this).toggleClass("active");
    $('.navigation_menu').toggleClass("focus");
  });


  //burger menu close//

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

  //Quantity choos//
  $('.changeminus').click(function(){
    var num = $(".number").text();
    if(num != 0){
    numm = num - 1;}
    $(".number").html(numm);
  });
  $('.changeplus').click(function(){
    var num = $(".number").text();
    var numc = + num;
    numm = numc + 1;
    $(".number").html(numm);
  });
  //Quantity choos close//

  //Додавання до корзини//
  $(".order_btn").click(function(){
    var num = $(".number").text();
    var numq = + num;
    var txt = $(".helper-btn-text").text();
    var txtq = + txt;
    sum = numq + txtq;
    $(".helper-btn-text").html(sum);
  });
  $(".sales_btn").click(function(){
    var txt = $(".helper-btn-text").text();
    var txtq = + txt;
    sum = 1 + txtq;
    $(".helper-btn-text").html(sum);
  });
  $(".cart_btn").click(function(){
    var txt = $(".helper-btn-text").text();
    var txtq = + txt;
    sum = 1 + txtq;
    $(".helper-btn-text").html(sum);
  });

  //Додавання до корзини кінець//


  //Slider окремого товару//
  $('.select_top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.select_bottom'
  });
  $('.select_bottom').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.select_top',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
  //Slider окремого товару//



});
