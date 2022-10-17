function align(){
    $("#center").height($("#container").height() - $("#header").height() - $("#footer").height() - 2);
    $("#app").width($("#center").width()- $("#sidebar").width()-$("#right-margin").width() - $("#navigationContainer").width() - 2);
    $("#cover").width($("#center").width()- $("#sidebar").width()-$("#right-margin").width() - $("#navigationContainer").width() - 2);



    document.getElementById("curr_width").innerHTML = document.getElementById("app").style.width;
}