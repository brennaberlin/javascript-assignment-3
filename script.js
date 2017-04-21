// Do your work in this file.
var div_view = document.createElement("div");
div_view.className += "view";
document.body.appendChild(div_view);

var view_map = document.getElementsByClassName("view")[0];
var div_grass = document.createElement("div");
div_grass.className += "grass";
view_map.appendChild(div_grass);

var div_sun = document.createElement("div");
div_sun.className += "sun";
view_map.appendChild(div_sun);

var sun_map = document.getElementsByClassName("sun")[0];
i = 0;
while (i < 5) {
var loop = document.createElement("div");
  loop.className += "ray-" + (i + 1);
  sun_map.appendChild(loop);
  i++;
}

var div_mountain = document.createElement("div");
div_mountain.className += "mountain";
view_map.appendChild(div_mountain);

var mountain_map = document.getElementsByClassName("mountain")[0];
var div_mountain_top = document.createElement("div");
div_mountain_top.className += "mountain-top";
mountain_map.appendChild(div_mountain_top);

var mountain_top_map = document.getElementsByClassName("mountain-top")[0];
var k = 0;
do {
  var div_mountain_cap = document.createElement("div");
  div_mountain_cap.className += "mountain-cap-" + (k + 1);
  mountain_top_map.appendChild(div_mountain_cap);
  k++;
} while(k < 3);