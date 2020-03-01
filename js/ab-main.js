//lef navigation panel js 2020
$(document).ready(function(){
(function($){
$('#pm_menu').pushmenu({ button : "#ab_1245"});
})(jQuery);
$(".pm_overlay").append('<div class="cls102"><a href="#"></a></div>');
});
;(function($, window, document, undefined){
function pushMenu (elem, options){
this.$body = $("body");
this.$elem = $(elem);
this.options = $.extend({}, this.config, options);
this.$toggler = this.$body.find(this.options.button || '.open');
this.initialize();
}
pushMenu.prototype.classes ={
show : "pm_show",
hide : "pm_hide",
overlay : "pm_overlay",
open : "pm_open"
}
pushMenu.prototype.initialize = function(){
var _this = this;
_this.initializeEvents();
if(this.$body.find("."+this.classes.overlay).length < 1){
var overlay = $("<div>").addClass(this.classes.overlay+" "+this.classes.hide);
this.$body.append(overlay);
}
}
pushMenu.prototype.initializeEvents = function(){
var _this = this;
this.$toggler.on('click', function(){
_this.toggleMenu("show");
});
this.$body.on('click','.'+_this.classes.overlay, function(){
_this.toggleMenu("hide");
});
}
pushMenu.prototype.toggleMenu = function(status){
var method = status == "show" ? "addClass" : "removeClass";
this.$elem[method](this.classes.open);
this.toggleOverlay(status);
}
pushMenu.prototype.toggleOverlay = function(status){
var _this = this;
var overlay = _this.$body.find("."+_this.classes.overlay);
if(status == "show"){
overlay.addClass(_this.classes.show).removeClass(_this.classes.hide);
}
else{
overlay.removeClass(this.classes.show);
setTimeout(function(){
overlay.addClass(_this.classes.hide);
},500);
}
}
$.fn.pushmenu = function(options){
return this.each(function(){
new pushMenu(this, options);
});
};
})(jQuery, window, document);

// facebook API
window.fbAsyncInit = function(){
FB.init({
appId      : '1185377901509888',
xfbml      : true,
version    : 'v5.0'
});
FB.AppEvents.logPageView();
};
(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)){return;}
js = d.createElement(s);js.id = id;
js.src = "https://connect.facebook.net/ar_AR/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//main adsense code
(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46991317-1', 'auto', 'blogger');
ga('blogger.send', 'pageview');
