$(document).ready(function(){
    var topics = ["birch", "oak", "sequoia", "sycamore", "spruce", "willow", "pine", "fig", "palm", "maple"];

    function imgDisplay() {
        var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + "example" + "&api_key=BgLtfJu3WbjPzngLYydCY8wjCVQ8BLUx&rating=pg-13&limit=10";

        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .done(function(response){
            var ourData = response.data;

            for (var i = 0; i < ourData.length; i++) {
                var displayDiv = $("<div class='col-md-2'>");
                var img = $("<img>");
                var rating = ourData[i].rating;
                var ratingDisplay = $("<span>").text("Rating: " + rating);
                var animated = results[i].images.fixed_height.url;
                var static = results[i].images.fixed_height.url;
                
                // add all these attributes, then append the image and respective rating to the displayDiv, finally insert the display div to the top of our igmColumn
                img.attr("src", static);
                img.addClass("giphyResponse");
                img.attr("data-state", "still");
                img.attr("data-still", static);
                img.attr("data-animate", animated);

                displayDiv.append(ratingDisplay);
                displayDiv.append(img);

                $("#imgColumn").prepend(displayDiv);
            }
        });
    }

    $("#imgInput").click(function(event){
        event.preventDefault();
        var newTopic = $("#imgInput").val().trim();
        topics.push(newTopic);
        buttonDisplay();
    });

    function buttonDisplay() {
        $("#topicColumn").empty();
        for (var i = 0; i < topics.length; i ++) {
            var topicButton = $("<btn class='btn btn-danger'>")
            topicButton.addClass("imgTopic");
            topicButton.attr("data-search", topics[i]);
            topicButton.text(topics[i]);
            $("#topicColumn").append(topicButton);
        }
    }

    buttonDisplay();
    // loop through the topics and generate a <btn> for each topic
    // when the user clicks the topic, grab the queryUrl and run a search based on the currentTopic (the currentTopic is the one the user clicked)
    // append a new button if the user pushes a new topic using the text-input
    // for mine we will check for hover instead of on click to start the gif animation
    // remember we are not overwriting the gifs added, we need to append more gifs.
    
    // i will finish this over the next week, unfinished as of now
});