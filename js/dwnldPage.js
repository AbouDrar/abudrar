function download_timer() {
		var seconds = 15; // Total seconds to wait
        seconds = seconds - 1;
        if (seconds < 0) {
	   // get the query string part from url
	   var query = window.location.search;
	   var urlParams = new URLSearchParams( query ); // object of the parameters
	   var website = urlParams.get('website');
	   var slug = urlParams.get('website');
	   var newSlug = slug.substring(11); //delete the first 11 characters of the slug.
	   var TheFullDownloadLink = website + newSlug;
       if(mainLink != null){
            window.location = TheFullDownloadLink;
       }else{
           //if there is no link in local storage:
           document.getElementById("countdown_seconds").innerHTML = "الرابط لم يعد يعمل !";
       }
           
        } else {
            // Update remaining seconds
            document.getElementById("countdown_seconds").innerHTML = "سيتم توجيهك الى رابط التحميل بعد " + seconds + " ثانية.";
            // Countdown wait time is 1 second
            window.setTimeout("download_timer()", 1000);
        }
    }
