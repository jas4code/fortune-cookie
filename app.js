$(document).ready(function() {
    var storedLink;

    $('img').hover(
        function(){
            storedLink = $(this).attr("alt-src");  // Make a clone of 'alt-src'
            $(this).attr("alt-src", $(this).attr("src")) // Change the value of 'alt-src'
            $(this).attr("src", storedLink) // Update the value of 'src' attribute
    }, function() {
            storedLink = $(this).attr("alt-src");
            $(this).attr("alt-src", $(this).attr("src"))
            $(this).attr("src", storedLink)
    });
    
});