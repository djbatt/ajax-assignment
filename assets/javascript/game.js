$(document).ready(function(){
    var topics = ["birch", "oak", "sequoia", "sycamore", "spruce", "willow", "pine", "fig", "palm", "maple"];

    function imgDisplay() {
        var currentTarget;
        $.ajax({
            url: queryUrl,
            method: GET
        })
        .done(function(response){
            var ourData = response.data;

            for (var i = 0; i < ourData.length; i++) {
                var img = $("<img>");
                var animated = results[i].images.fixed_height.url;
                var static = results[i].images.fixed_height.url;

                img.attr("src", static);
                img.addClass("giphyResponse");
                img.attr("data-state", "still");
                img.attr("data-still", static);
                img.attr("data-animate", animated);
            }
        })
    }

    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + currentTarget + "&api_key=BgLtfJu3WbjPzngLYydCY8wjCVQ8BLUx&rating=pg-13&limit=10";

    function userInput() {
        $(".btn").click(function(event) {
            var textSelection = event.target.textContent

            if (event.target.class = "imgOption") {
                currentTarget = textSelection;
                console.log(currentTarget);
                console.log(queryUrl);
            }
            
            if (event.target.id === "inputBtn") {
            };
            imgDisplay();
        });
    }

    function pageLoad() {
        for (var i = 0; i < topics.length; i++) {
            $("#topicColumn").append(" <btn class='btn btn-primary imgOption'>" + topics[i] + "</btn> ")
        }
        userInput();
    }
    
    pageLoad();
    
    // loop through the topics and generate a <btn> for each topic
    // when the user clicks the topic, grab the queryUrl and run a search based on the currentTopic (the currentTopic is the one the user clicked)
    // append a new button if the user pushes a new topic using the text-input
    // for mine we will check for hover instead of on click to start the gif animation
    // remember we are not overwriting the gifs added, we need to append more gifs.
    
    // i will finish this over the next week, unfinished as of now
});