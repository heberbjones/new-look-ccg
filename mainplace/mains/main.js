var colbtn = document.getElementById("colbtn");
var body = document.getElementById("body");
var lefter = document.getElementById("lefter");
var header = document.getElementById("header");
var colstat = {
	
	seen:"yes"
	
};

colbtn.onclick = leftermovement;


function leftermovement () {
	
	if (colstat.seen === "yes") {
		lefter.style.left = "-250px";
		body.style.marginLeft = "0";
		colbtn.setAttribute("class","fa fa-angle-right");
		header.style.left = "0";
		colstat.seen = "no";
	}
	
	else if (colstat.seen === "no") {
		lefter.style.left = "0px";
		body.style.marginLeft = "250";
		header.style.left = "250px";
		colbtn.setAttribute("class","fa fa-angle-left");
		colstat.seen = "yes";
	}
	
}