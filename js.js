function enlarge(image) {
    var large = document.getElementById('enlargedImage');
    large.innerHTML = "";
    large.innerHTML += "<img src=" + image + " height=400 width=800><br>";
    large.innerHTML += "<span style:'position:relative; left:300px; top:-390px;'>" +
        "<a href='javascript:close()'><img src='imgs/close.png' width='15' height='15'></a></span> ";

    large.style.visibility = "visible";
}

function close(image){
        var large =document.getElementById('enlargedImage');
        large.innerHTML = "";
        large.style.visibility = "hidden";
}
