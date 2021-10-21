
var seconds = 15; // Total seconds to wait
function download_timer(){
        seconds = seconds - 1;
     if (seconds < 0) {
			// get the query string part from url
			var query = window.location.search; // get the query search part if the url
			var urlParams = new URLSearchParams( query ); // object of the parameters
			var TheFullDownloadLink = ""; //link is empty now
			for(var [param, value] of urlParams.entries()) {
				//check if the param is the slug an trim it:
				// do not spell "website" nor "slug"
				if( param === "website" ){
					TheFullDownloadLink += value;
				}else if( param === "slug" ) {
					value = value.substring( 12 ); // remove the first 12 characters of slug's value 
					TheFullDownloadLink += value;
				}else if ( param === "m" && value === 1 ){ //don't put mobile version in the url
					TheFullDownloadLink += "";
				}else{
					TheFullDownloadLink += "&" + param + "=" + value;
				}
			}
			if( TheFullDownloadLink != null){
				window.location = TheFullDownloadLink; // go to download link 
			}else{
				document.getElementById("Countdown").innerHTML = "لا يعمل هذا الرابط";
				}
				
      } else {
            // Update remaining seconds
            document.getElementById("Countdown").innerHTML = "سيتم توجيهك لصفحة التحميل بعد " +seconds+ " ثانية.";
            // Countdown wait time is 1 second = 1000 miliseconds
            window.setTimeout( "download_timer()" , 1000);
        }
   }
