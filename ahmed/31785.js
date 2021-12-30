/*script N° 31785*/
/* main menu*/
$(document).ready(function() {
(function($) {
  $.fn.drawermenu = function(options) {

    var opts = $.extend({}, $.fn.drawermenu.defaults,options);

    var drawermenu = this;
	if ($(window).width() > 640){
    var status = true;
	} else {
	var status = false;
	}
    var menu_position = opts.position;

    if(menu_position == 'right'){
      $(drawermenu).addClass('drawermenu-right');
    }

    if($(drawermenu).find("ul > li > ul").length){
      $(drawermenu).find("ul > li > ul").parent().children("a").addClass('arrow down');
      $(drawermenu).find("ul > li > ul").parent().children("a").attr("href","#");
    }

    $(document).on("click",'.drawermenu a.down',function(){
      $(this).next("ul").slideToggle(100);
	  
    });

    $(document).on("click",'.drawer-toggle',function(){
      if(status == false){
		
        $(".drawermenu-overlay").show();
        if(menu_position == 'left'){
          $(drawermenu).animate({
            'left':'0px'
          },opts.speed);
        }
        else{
          $(drawermenu).animate({
            'right':'0px'
          },opts.speed);
        }
        status = true;
      }
      else{
	  if ($(window).width() < 640){
        if(menu_position == 'left'){
          $(drawermenu).animate({
            'left':'-280px'
          },opts.speed);
		  
        }
        else{
          $(drawermenu).animate({
            'right':'-280px'
          },opts.speed);
			
        }
        status = false;
        $(".drawermenu-overlay").hide();
      }
      }
    });

    $(document).on("click",'.drawermenu-overlay,.drawermenu-close',function(){
      if(status == true){
        if(menu_position == 'left'){
          $(drawermenu).animate({
            'left':'-280px'
          },opts.speed);
        }
        else{
          $(drawermenu).animate({
            'right':'-280px'
          },opts.speed);
        }
        status = false;
        $(".drawermenu-overlay").hide();
      }
    });
  }

  $.fn.drawermenu.defaults = {
    speed: 150,
    position:"right"
  };
})(jQuery);

  $('#left-sidebar').drawermenu({
    speed:100,
    position:'right'
  });
 
/* facebook sdk */

    $("#show_cmnts").click(function(){
        var pstlink = viewLinkUrl;
        var $comments_div = $( '.fb-commentsss' );
        $comments_div.addClass( 'fb-comments' );
        $comments_div.attr( 'data-href', pstlink );
        FB.XFBML.parse();  
    });
	
window.fbAsyncInit = function() {
FB.init({
appId      : '275893526277725',
xfbml      : true,
version    : 'v10.0'
});
FB.AppEvents.logPageView();
};
(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;

js.src = "//connect.facebook.net/" + facebookLang + "/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
});
