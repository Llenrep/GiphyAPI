$("button").on("click", function(){
    console.log($(this).attr("name"))

    var person = $(this).attr("name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=GQ6BlBv7dj9fF8q1vHfseubUDIljPR8a&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data; 

        for (var i = 0; i < results.length; i++){ 

            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");

            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);

            gifDiv.prepend(personImage);

            $("#gifsGoHere").prepend(gifDiv);        
        }
    })  
})

$("#Submit").on("click", function(){
    event.preventDefault();

    newArtist = $("#actualArtist").val();

    newButton = $("#gifButtons").append($("<button>").html("<ins>" + newArtist + "</ins>").attr("name", newArtist));
    
    console.log("Added to the DIV!")
})