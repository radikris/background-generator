var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var copyText = document.getElementById("myInput");

//var color1=document.getElementsByClassName("color1")[0];
var body=document.getElementById("gradient");

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", " + color2.value + ")";


	css.textContent = body.style.background + ";";
	copyText.textContent=body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function copyBackground() {
	/* Get the text field */


	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}


