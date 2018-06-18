$(document).ready(function(){
    
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + currentTarget + "&api_key=BgLtfJu3WbjPzngLYydCY8wjCVQ8BLUx&rating=pg-13";
    var topics = ["birch", "oak", "sequoia", "sycamore", "spruce", "willow", "pine", "fig", "palm", "maple"],

    function userInput() {
        $(".btn").click(function(event) {

            var currentTarget = event.target.textContent
            
            if (event.target.id === "inputBtn") {
            };
        });
    }

    function imgDisplay() {
        $.ajax({
            url: ajax.queryUrl,
            method: GET
        })
        .done(function(response){

        })
    }

    function pageLoad() {
        for (var i = 0; i < ajax.topics.length; i++) {
            $("#topicColumn").append(" <btn class='btn btn-primary'>" + ajax.topics[i] + "</btn> ")
        }
        ajax.userInput();
    }
    
    pageLoad();
    
    // loop through the topics and generate a <btn> for each topic
    // when the user clicks the topic, grab the queryUrl and run a search based on the currentTopic (the currentTopic is the one the user clicked)
    // append a new button if the user pushes a new topic using the text-input
    // for mine we will check for hover instead of on click to start the gif animation
    // remember we are not overwriting the gifs added, we need to append more gifs.
    
    // i will finish this over the next week, unfinished as of now
});