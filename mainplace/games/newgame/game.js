var enemy = document.getElementById("enemy");
var enemy2 = document.getElementById("enemy2");
var speedball = document.getElementById("speedball");
var player = document.getElementById("player");
var nexttext = document.getElementById("nexttext");
var storebtn = document.getElementById("storebtn");
var store = document.getElementById("store");
var closebtn = document.getElementById("closestr");
var sballbtn = document.getElementById("extraSbll");
var sball2 = document.getElementById("speedball2");
var enemy2bht = document.getElementById("enemyBGHT");
var winbtn = document.getElementById("winbtn");
var fromtop = 50;
var winornot = "Next Level!";
var winalert = document.getElementById("winalert");
var fromleft = 10;
var enmy2btn = document.getElementById("extraEnmy");
var speed = 10;
var x = 1;
var key2;
var sballbought = document.getElementById("sballBGHT");
var sball2$;
var score = document.getElementById("score");
var scorenum = 0;
var myKey;
var key;
var enemy2$;

var time = 2000;
var powertime = 3000;

var enmyrandtop = Math.random() * 500;
var enmyrandleft = Math.random() * 1000;
var enmywidth1 = enmyrandleft - 10;
var enmywidth2 = enmyrandleft + 20;
var enmyheight1 = enmyrandtop - 10;
var enmyheight2 = enmyrandtop + 20;

var enmy2randtop = Math.random() * 500;
var enmy2randleft = Math.random() * 1000;
var enmy2width1 = enmyrandleft - 10;
var enmy2width2 = enmyrandleft + 20;
var enmy2height1 = enmyrandtop - 10;
var enmy2height2 = enmyrandtop + 20;

var spdrandtop = Math.random() * 500;
var spdrandleft = Math.random() * 1000;
var sballwidth1 = spdrandleft - 10;
var sballwidth2 = spdrandleft + 20;
var sballheight1 = spdrandtop - 10;
var sballheight2 = spdrandtop + 20;
var win = false;
var tbpostop;
var tbposleft;
var tball = document.getElementById("tBall");
var spdrandtop2 = Math.random() * 500;
var spdrandleft2 = Math.random() * 1000;
var sball2width1 = spdrandleft - 10;
var sball2width2 = spdrandleft + 20;
var sball2height1 = spdrandtop - 10;
var sball2height2 = spdrandtop + 20;

winbtn.onclick = function win () {
	if (scorenum > 39) {
		win = true;
		enemy2$ = "bought";
		sball2$ = "bought";
		winalert.style.display = "block";
		scorenum = 100000000;
		score.innerHTML = scorenum;
		powertime = 10000;
		speed = 20;
		winornot = "YOU WON!";
		nexttext.innerHTML = winornot;
		nexttext.style.display = "block";
		winbtn.style.display = "none";
		
	}
	
}

storebtn.onclick = function showstore () {
	store.style.display = "block";
}

closebtn.onclick = function closestore () {
	store.style.display = "none";
}

score.innerHTML = scorenum;

function start () {

speedball.style.top = spdrandtop + 20 + "px";
speedball.style.left = spdrandleft + 20 + "px";	

sball2.style.top = spdrandtop2 + 20 + "px";
sball2.style.left = spdrandleft2 + 20 + "px";	



placeEnmy();



function placeEnmy () {
	
	enmyrandtop = Math.random() * 500;
	enmyrandleft = Math.random() * 1000;
	
	enemy.style.top = enmyrandtop + 30 + "px";
enemy.style.left = enmyrandleft + 30 + "px";

enmywidth1 = enmyrandleft - 10;
enmywidth2 = enmyrandleft + 30;
enmyheight1 = enmyrandtop - 10;
enmyheight2 = enmyrandtop + 30;

if (enemy2$ == "bought") {
	enmy2randtop = Math.random() * 500;
	enmy2randleft = Math.random() * 1000;
	
	enemy2.style.top = enmy2randtop + 30 + "px";
enemy2.style.left = enmy2randleft + 30 + "px";

enmy2width1 = enmy2randleft - 10;
enmy2width2 = enmy2randleft + 30;
enmy2height1 = enmy2randtop - 10;
enmy2height2 = enmy2randtop + 30;}

setTimeout(placeEnmy, 1800);	

}






}

function getkey(event) {
 myKey = event.key;
 key = event.which || event.keyCode;
 key2 = event.keyCode;
 
    if (key == 32) {
		tbpostop = fromtop - 15;
		tbposleft = fromleft + 5;
		tball.style.marginTop = tbpostop + "px";
		tball.style.marginLeft = tbposleft + "px";
		tball.style.display = "block";
		
	}
       
	   if (myKey == "e" || myKey == "E" ) {
		   fromtop = tbpostop + 15;
		   fromleft = tbposleft - 5;
	   }

	   
    if (myKey == "w" || myKey == "W") { 
        fromtop -= speed;
		player.src = "pics/upface.png";
		
    }

	
	   if (myKey == "s" || myKey == "S") { 
        fromtop += speed;
		player.src = "pics/mainface.png";
			
    }
	
	if (myKey == "d" || myKey == "D") {
		fromleft += speed;
		player.src = "pics/rightface.png";
		
	}
	
	if (myKey == "a" || myKey == "A") {
		fromleft -= speed;
		player.src = "pics/leftface.png";
	}
	
	if (fromleft < 9) {
	fromleft = 10;
}

	if (fromtop < 9) {
	fromtop = 10;
}

	if (fromleft > 1001) {
	fromleft = 1000;
}

	if (fromtop > 501) {
	fromtop = 500;
}

if (fromleft > sballwidth1 && fromtop > sballheight1 && fromleft < sballwidth2 && fromtop < sballheight2) {
	speedball.style.display = "none";
	speed = 15;
player.style.border = "#00cc00 5px solid";
	setTimeout(takepower, powertime);
}

if (fromleft > sball2width1 && fromtop > sball2height1 && fromleft < sball2width2 && fromtop < sball2height2) {
	sball2.style.display = "none";
	speed = 15;
	player.style.border = "#00cc00 5px solid";
	setTimeout(takepower2, powertime);
}



if (fromleft > enmywidth1 && fromtop > enmyheight1 && fromleft < enmywidth2 && fromtop < enmyheight2) {
	scorenum++;
score.innerHTML = scorenum;
enemy.style.display = "none";
player.style.backgroundColor = "gold";
nexttext.style.display = "block";
nexttext.innerHTML = winornot
setTimeout(startover, 2000);

}

if (fromleft > enmy2width1 && fromtop > enmy2height1 && fromleft < enmy2width2 && fromtop < enmy2height2) {
	scorenum++;
score.innerHTML = scorenum;
enemy2.style.display = "none";
player.style.backgroundColor = "gold";
nexttext.innerHTML = winornot
nexttext.style.display = "block";
setTimeout(startover, 2000);

}


function startover () {
	nexttext.style.display = "none";
	powertime -= 500;
	time -= 500;
	enemy.style.display = "block";
	if (enemy2$ == "bought") {
		enemy2.style.display = "block";
	}
	
	player.style.backgroundColor = "red";
}
	
	if (scorenum >= 3) {
	
	amount = 0;
	time = 2000;
	powertime = 3000;
	
}

if (scorenum > 9) {
	sballbtn.onclick = function showsball2 () {
	sball2.style.display = "block";
	sball2$ = "bought";
	scorenum -= 10;
	score.innerHTML = scorenum;
	sballbtn.style.display = "none";
	sballbought.style.display = "block";
	
}
}


if (scorenum > 14) {
	enmy2btn.onclick = function showsenemy2 () {
	enemy2.style.display = "block";
	enemy2$ = "bought";
	scorenum -= 15;
	score.innerHTML = scorenum;
	enmy2btn.style.display = "none";
	enemy2bht.style.display = "block";
	
}
}
	
	player.style.left = fromleft + "px";
	player.style.top = fromtop + "px";
}

function takepower () {
	player.style.backgroundColor = "red";
	
 spdrandtop = Math.random() * 500;
 spdrandleft = Math.random() * 1000;
 
 speedball.style.top = spdrandtop + 20 + "px";
speedball.style.left = spdrandleft + 20 + "px";

player.style.border = "none";

speedball.style.display = "block";	

speed = 10;	

 sballwidth1 = spdrandleft - 10;
 sballwidth2 = spdrandleft + 20;
 sballheight1 = spdrandtop - 10;
 sballheight2 = spdrandtop + 20;
	
}

function takepower2 () {
	player.style.border = "none";
	
 spdrandtop2 = Math.random() * 500;
 spdrandleft2 = Math.random() * 1000;
 
 sball2.style.top = spdrandtop2 + 20 + "px";
sball2.style.left = spdrandleft2 + 20 + "px";

if (sball2$ === "bought") {

sball2.style.display = "block";	}

speed = 10;	

 sball2width1 = spdrandleft2 - 10;
 sball2width2 = spdrandleft2 + 20;
 sball2height1 = spdrandtop2 - 10;
 sball2height2 = spdrandtop2 + 20;
	
}