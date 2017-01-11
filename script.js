$(document).ready(function() {
    $("#giphy").submit(function(event) {
        event.preventDefault();
       var query= $("#query").val();
       console.log(query);
    }); 
});

// JavaScript File
