var startUp = function () {
    $("#getMovie").on("click", getMovie);
}

var getMovie = function () {
    $("li.title").text("");
    $(".year").text("");
    $(".stars").text("");
    $(".poster").attr('src', "");
    $(".genre").text("");
    var titles = ['0047396', '0120762', '0096283', '0045810', '1748122', '0109686', '0087332', '0093748', '0104070', '0046961', '0069495', '0844330', '0108037', '0088930'];
    var id = Math.floor((Math.random() * 13) + 1);
    movieGet(titles[id], onSuccess, onError);
}

var onSuccess = function (data) {
    console.log(data.title, data.year, data.genre);
    $("li.title").append(data.title);
    $(".year").append(data.year);
    $(".poster").attr("src", data.poster.large);
    for (let i = 0; i < data.genre.length; i++) {
        var genre = data.genre[i];
        $(".genre").append(genre + "<br>");
    }
    for (let i = 0; i < data.stars.length; i++) {
        var star = data.stars[i];
        $(".stars").append(star + "<br>");
    }
}

var onError = function () {
    console.log("An error ocurred");
}

$(document).ready(startUp);