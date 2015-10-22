var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");

var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");

img1.addEventListener("mousedown", function(e) {
    if(img1.src == "http://blog.caranddriver.com/wp-content/uploads/2013/12/2014-Volkswagen-Jetta-GLI-Edition-30-626x382.jpg") img1.src = "http://preview.netcarshow.com/Volkswagen-Jetta-2006-1024-06.jpg";
    else img1.src = "http://blog.caranddriver.com/wp-content/uploads/2013/12/2014-Volkswagen-Jetta-GLI-Edition-30-626x382.jpg";
}, false);

img2.addEventListener("mousedown", function(e) {
    if(img2.src == "http://1.bp.blogspot.com/-chAoatuptuw/Ulw6vihRmUI/AAAAAAAOlIs/UXl3q7WtKow/s1600/Jetta-7.jpg") img2.src = "http://spidercars.net/wp-content/uploads/images/2000-Volkswagen-Jetta.jpg";
    else img2.src = "http://1.bp.blogspot.com/-chAoatuptuw/Ulw6vihRmUI/AAAAAAAOlIs/UXl3q7WtKow/s1600/Jetta-7.jpg";
}, false);

img3.addEventListener("mousedown", function(e) {
    if(img3.src == "http://auto.samondeo.com/images1/volkswagen-jetta-5.jpg") img3.src = "http://theautoz.com/images/volkswagen-jetta-2014-9.jpg";
    else img3.src = "http://auto.samondeo.com/images1/volkswagen-jetta-5.jpg";
}, false);

img4.addEventListener("mousedown", function(e) {
    if(img4.src == "https://upload.wikimedia.org/wikipedia/commons/e/e1/93-95_Volkswagen_Jetta.jpg") img4.src = "http://srv2.betterparts.org/images/vw-jetta-15.jpg";
    else img4.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/93-95_Volkswagen_Jetta.jpg";
}, false);

img5.addEventListener("mousedown", function(e) {
    if(img5.src == "https://upload.wikimedia.org/wikipedia/commons/6/66/VW_Jetta_front_20070518.jpg") img5.src = "https://www.eskimo.com/~riffraff/images/cars/myjetta/jetta.jpg";
    else img5.src = "https://upload.wikimedia.org/wikipedia/commons/6/66/VW_Jetta_front_20070518.jpg";
}, false);

img6.addEventListener("mousedown", function(e) {
    if(img6.src == "http://www.blogcdn.com/www.autoblog.com/media/2010/06/db2010au00678medium.jpg") img6.src = "http://momentcar.com/images/volkswagen-jetta-1992-4.jpg";
    else img6.src = "http://www.blogcdn.com/www.autoblog.com/media/2010/06/db2010au00678medium.jpg";
}, false);

img7.addEventListener("mousedown", function(e) {
    if(img7.src == "https://upload.wikimedia.org/wikipedia/commons/a/ab/VW_Jetta_sedan.jpg") img7.src = "http://www.unionpuebla.mx/sites/default/files/imagecache/v2_660x370/frente-jetta-classico1_1.jpg";
    else img7.src = "https://upload.wikimedia.org/wikipedia/commons/a/ab/VW_Jetta_sedan.jpg";
}, false);

img8.addEventListener("mousedown", function(e) {
    if(img8.src == "https://upload.wikimedia.org/wikipedia/commons/9/93/'85-'87_Volkswagen_Jetta_Coupe.jpg") img8.src = "http://tuchetumal.com/wp-content/uploads/2015/05/vw-jetta-frente.jpg";
    else img8.src = "https://upload.wikimedia.org/wikipedia/commons/9/93/'85-'87_Volkswagen_Jetta_Coupe.jpg";
}, false);

img9.addEventListener("mousedown", function(e) {
    if(img9.src == "http://4.bp.blogspot.com/-FM0Ip4MGmyg/Une7vBssW-I/AAAAAAAO088/Npts93dlGU8/s1600/VW-Jetta-FMS-Racers-Dream_1.jpg") img9.src = "http://www.palmbeacheurocars.com/chicago/2003-vw-jetta_01_17cd952ffe8485cae58598725b5e6b71.JPG";
    else img9.src = "http://4.bp.blogspot.com/-FM0Ip4MGmyg/Une7vBssW-I/AAAAAAAO088/Npts93dlGU8/s1600/VW-Jetta-FMS-Racers-Dream_1.jpg";
}, false);


function changeDescription(id, string) {
    document.getElementById(id).innerHTML = string;
}