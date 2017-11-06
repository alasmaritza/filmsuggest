var movieGet = function(id,onSuccess,onError) {
    var url = "https://www.theimdbapi.org/api/movie?movie_id=tt" + id
    var settings = {
        cache: false,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'json',
        success: onSuccess,
        error: onError,
        type: 'GET'
    }
    $.ajax(url,settings);
}