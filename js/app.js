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




  ///////////////////////
  var twobombSlider  = (function(){
  var drag = false;
  var values = [];


  $(".slider").each(function(i,e){
  	updateView(e);
  });
  $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown",function(){
  	drag = $(this);
  })
  $(document).bind("mousemove",function(e){
  	if(!drag)
    	return;
     var x = (e.pageX - $(drag).outerWidth()/2 - $(drag).parent().parent().offset().left)/$(drag).parent().parent().outerWidth();
     if(x < 0 ) x = 0;
     if(x > 1) x = 1;
     var rp = $(drag).parent().find(".rp");
     var lp = $(drag).parent().find(".lp");
     if($(drag).hasClass("lp") && x > $(rp).attr("data-pos") ){
     		$(rp).attr("data-pos",x);
     }
     if($(drag).hasClass("rp") && x < $(lp).attr("data-pos") ){
     		$(lp).attr("data-pos",x);
     }
     $(drag).attr("data-pos",x);
     updateView($(drag).parent().parent());
  });
  $(document).bind("mouseup",function(){
  	drag = false;
  });
  function updateView(slider){
  	var startVal = parseInt($(slider).find(".bar").data("start"));
  	var endVal = parseInt($(slider).find(".bar").data("end"));
    if(startVal > endVal)
    	endVal = startVal;
  	startVal = startVal || 0;
    endVal = endVal || 100;
    var values = [];
    for(var i = startVal; i <= endVal;i++)
    	values.push(i);
  	var l  =$(slider).find(".lp").attr("data-pos");
  	var r  =$(slider).find(".rp").attr("data-pos");
    var x = $(slider).outerWidth() * l;
    var w = (r - l)*$(slider).outerWidth();
    $(slider).find(".bar").css({left:x+"px",width:w+"px"});
    var index = Math.round(values.length*l);
    if(index >= values.length)
    	index = values.length-1;
    $(slider).find(".lp").html("<span>"+values[index]+"</span>");
    index = Math.round(values.length*r);
    if(index >= values.length)
    	index = values.length-1;
    $(slider).find(".rp").html("<span>"+values[index]+"</span>");
    }
    })();
});
