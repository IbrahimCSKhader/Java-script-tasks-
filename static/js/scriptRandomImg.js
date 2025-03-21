var myElement = document.getElementById("myImg");
var myImgs = [
  "/static/img/photo1.jpg",
  "/static/img/photo2.jpg",
  "/static/img/photo3.jpg",
  "/static/img/photo4.jpg",
  "/static/img/photo5.jpg", 
];
// var r = Math.floor(Math.random() * myImgs.length);

function chang( myElement,myImgs ) {
  "use strict"; 
  setInterval(function () {

    myElement.src=myImgs[Math.floor(Math.random() * myImgs.length)];
  }, 1000);
}
chang(myElement,myImgs)