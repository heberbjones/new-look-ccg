var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var speed = 3500;

image1();

function image1 () {
	img3.style.display = "none";
	img2.style.display = "none";
	img1.style.display = "block";
	
	setTimeout(image2, speed);
}

function image2 () {
	
	img3.style.display = "none";
	img2.style.display = "block";
	img1.style.display = "none";
	
	setTimeout(image3, speed);
}

function image3 () {
	img3.style.display = "block";
	img2.style.display = "none";
	img1.style.display = "none";	
	
	setTimeout(image1, speed);
	
}