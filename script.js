$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
        var query = $("#query").val();
        console.log(query);
        $.ajax({
            // This is the URL of the API
            url: "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&lang=fr&q=" + query
        }).done(function(response) { // the .done function happens after the API response is returned
            console.log(response);
            for (var i = 0; i < 20; i++) {
                // this is the jQuery way to create
                // a new image element
                var url = response.data[i].images.fixed_height_downsampled.url;
                console.log(url);

                var image = $('<img>');
                image.attr('src', url);


                // when we create a new element,
                // jQuery returns an array. So we
                // need to look for the first item
                // in the image array

                

                $("#results").append(image);

            }
        });
    });
    //$("#giphy").click(function()) {
        //lert("")
    //}
});

// JavaScript File
