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
		lefter.style.left = "-18%";
		body.style.marginLeft = "0";
		colbtn.setAttribute("class","fa fa-angle-right");
		header.style.left = "0";
		colstat.seen = "no";
	}
	
	else if (colstat.seen === "no") {
		lefter.style.left = "0px";
		body.style.marginLeft = "18%";
		header.style.left = "18%";
		colbtn.setAttribute("class","fa fa-angle-left");
		colstat.seen = "yes";
	}
	
}



window.onscroll = function() {scrollFunction()};

var pagetype = document.getElementById("pagetype");

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      pagetype.style.marginTop = "70px";
	  pagetype.style.position = "fixed";
	  
    } 
	
	else if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
      pagetype.style.marginTop = "250px";
	  pagetype.style.position = "absolute"; 
	
    }
}