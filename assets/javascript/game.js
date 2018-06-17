$(document).ready(function(){
    var ajax = {
        queryUrl: "http://api.giphy.com/v1/gifs/search?q=" + "words" + "&api_key=BgLtfJu3WbjPzngLYydCY8wjCVQ8BLUx&rating=pg-13",
        topics: ["birch", "oak", "sequoia", "sycamore", "spruce", "willow", "pine", "fig", "palm", "maple"],

        pageLoad: function() {
            ajax.userInput();
            for (var i = 0; i < ajax.topics.length; i++) { // generate the first buttons
                $("#topicColumn").append(" <btn class='btn btn-primary'> " + ajax.topics[i] + " </btn> ")
            }
        },

        userInput: function() {
            $(".btn").click(function(event) {
                var user = event;
                console.log("test");
            });
        },
    }

    ajax.pageLoad();
    
    // loop through the topics and generate a <btn> for each topic
    // when the user clicks the topic, grab the queryUrl and run a search based on the currentTopic (the currentTopic is the one the user clicked)
    // append a new button if the user pushes a new topic using the text-input
    // for mine we will check for hover instead of on click to start the gif animation
    // remember we are not overwriting the gifs added, we need to append more gifs.
    
    // i will finish this over the next week, unfinished as of now
});