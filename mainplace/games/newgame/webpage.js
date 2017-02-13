var htp = document.getElementById("htparea");
var htpbtn = document.getElementById("htp");
var closehtp = document.getElementById("closehtp");

htpbtn.onclick = function openhtp () {
	htp.style.display = "block";
	
}

closehtp.onclick = function clsehtp () {
	htp.style.display = "none";
}