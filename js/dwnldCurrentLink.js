//<![CDATA[
 Array.from(document.getElementsByClassName('download-file')).forEach((button) => {
      button.addEventListener('click', (e)=>{
        e.preventDefault();
        var website = e.target.getAttribute( 'data-site' );
        var slug = e.target.getAttribute( 'data-url' );
    //now we need to send the user to the static page: 
    var downloadpage = "/tests/download.html?website=" + website + "&slug=" + slug;
    window.location = downloadpage;
    });

      });
//]]>
