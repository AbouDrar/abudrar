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
