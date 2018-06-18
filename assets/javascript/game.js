$(document).ready(function(){
    var topics = ["birch", "oak", "sequoia", "sycamore", "spruce", "willow", "pine", "fig", "palm", "maple"];

    function buttonDisplay() {
        $("#topicColumn").empty();
        for (var i = 0; i < topics.length; i ++) {
            var topicButton = $("<button>")
            topicButton.addClass("btn btn-danger");
            topicButton.addClass("topic");
            topicButton.attr("data-name", topics[i]);
            topicButton.text(topics[i]);
            $("#topicColumn").append(topicButton);
        }
    }

    function topicInput() {
        $("#imgInput").click(function(event){
            event.preventDefault();
            var newTopic = $("#imgInput").val().trim();
            topics.push(newTopic);
            buttonDisplay();
        });
    }

    function displayImage() {
        // cant get the topic to change
        var topic = $(this).attr("data-name");
        console.log(this);
        var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=BgLtfJu3WbjPzngLYydCY8wjCVQ8BLUx&rating=g&limit=10";

        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .done(function(response) {
            var ourData = response.data;
            console.log(ourData);

            for (var i = 0; i < ourData.length; i++) {
                var displayDiv = $("<div class='col-md-4'>");
                var img = $("<img>");
                var rating = ourData[i].rating;
                var ratingDisplay = $("<span>").text("Rating: " + rating);
                var static = ourData[i].images.fixed_height.url;
                
                // add all these attributes, then append the image and respective rating to the displayDiv, finally insert the display div to the top of our igmColumn
                img.attr("src", static);
                img.addClass("giphyResponse");
                img.attr("data-state", "still");
                img.attr("data-still", static);

                $("#imgColumn").append(ratingDisplay);
                $("#imgColumn").append(img);

                $("#imgColumn").prepend(displayDiv);
            }
        });
    }

    $(document).on("click", ".topic", displayImage);

    buttonDisplay();
});