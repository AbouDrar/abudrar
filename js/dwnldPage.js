//<![CDATA[
var seconds = 15; // Total seconds to wait
function download_timer(){
        seconds = seconds - 1;
        if (seconds < 0) {
			// get the query string part from url
			var query = window.location.search;
			var urlParams = new URLSearchParams( query ); // object of the parameters
			
			for (var theParameter in urlParams) {
				if ( urlParams.hasOwnProperty( theParameter ) ) {
					/**** if(){
						
					} **/
					
        console.log(theParameter + " ---> " + urlParams[theParameter]);
    }
}
			var website = urlParams.get( 'website' );
			var slug = urlParams.get( 'slug' );
			var newSlug = slug.substring( 11 ); //delete the first 11 characters of the slug.
			var TheFullDownloadLink = website + newSlug;
			if( TheFullDownloadLink != null){
				window.location = TheFullDownloadLink;
			}else{
				document.getElementById("Countdown").innerHTML = "لا يعمل هذا الرابط";
				}
				
        } else {
            // Update remaining seconds
            document.getElementById("Countdown").innerHTML = "سيتم توجيهك لصفحة التحميل بعد " +seconds+ " ثانية.";
            // Countdown wait time is 1 second
            window.setTimeout( "download_timer()" , 1000);
        }
   }

//]]>
