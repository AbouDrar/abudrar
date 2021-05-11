 Array.from(document.getElementsByClassName('download-file')).forEach((button) => {
      button.addEventListener('click', (e)=>{
        e.preventDefault();
        var dddSite = e.target.getAttribute('data-site');
        var kkk = e.target.getAttribute('data-url');
        // delet the first 12 characters of data-url content 
        var newwjj = kkk.substring(12);
        //now you get the data from the clicked button:
        var thelink = dddSite+newwjj;
          // now lets store the data in localstorage:
 if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("TheDwnloadLink", thelink);
    } else {
      //do this and this 
    }
    //now we need to send the user to the static page: 
    window.open("/p/download.html", "_blank");
    });

      });
