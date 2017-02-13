var logo = document.getElementById("bfrlogo");
var fader = document.getElementById("fade");
var load = document.getElementById("loader");
var randtime = Math.random() * 10000;
var colors = ["red","blue","green","#00cc00","purple","black"];
var randcolor;

loader.onclick = changecolor;

setTimeout(movelogo, 500);


function movelogo () {
	
	logo.style.fontSize = "50px";
	setTimeout(fadeout, 3000);
	
}

function fadeout () {
	
	fader.style.display = "block";
	fader.style.backgroundColor = "black";
	load.style.display = "block";
	
	setTimeout(getready, 3000);
}

function getready () {
	logo.style.display = "none";
	fader.style.display = "none";
	
	setTimeout(game, randtime);
}

function changecolor () {

 randcolor = Math.floor( Math.random() * colors.length);
loader.style.borderTopColor = colors[randcolor];

	
}

function game () {
	load.style.display = "none";
	
	
	window.location = "game.html";
	
}