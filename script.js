// Do your work in this file.

var view = document.createElement("div_view");
view.className = "div_view";
document.body.appendChild(div_view);

var div_grass = document.createElement("grass");
grass.className = "grass";
document.body.appendChild(view);

var sun = document.createElement("sun");
sun.className = "sun";
doument.body.appendChild(view);

var mountain = document.createElement("mountain");
mountain.className = "mountain";
document.body.appendChild(view);

var mountain-top = document.createElement("mountain-top");
mountain-top.className = "mountain-top";
document.body.appendChild(mountain)


// var div_grass = "<div class='grass'></div>";
// document.getElementsByClassName("view").appendChild(div_grass);

// var div_sun = "<div class='sun'></div>";
// document.getElementsByClassName("grass").appendChild(div_sun);

var i = 0;
while (i < 5) {
    var div_loop = "<div class=ray-" + (i + 1) + "></div>";
    document.getElementsByClassName("sun").appendChild(div_loop);
    i++;
}

// var div_mountain = "<div class='mountain'></div>";
// document.getElementsByClassName("view").appendChild(div_mountain);

// var div_mountaintop = "<div class='mountain-top'></div>";
// document.getElementsByClassName("mountain").appendChild(div_mountaintop);

var k = 0;
do {
    var div_do = "<div class=mountain-cap" + (k + 1) + "></div>";
    document.getElementsByClassName("mountain-top").appendChild(div_do);
    k++;
} while (k < 3);
