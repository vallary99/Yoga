$(document).ready(function(){
    $("#karma").click(function(){
        $("#karma-content").show();
        $("#karma").hide();
    });

    $("#karma-content").click(function(){
        $("#karma").show();
        $("#karma-content").hide();
    });
})
