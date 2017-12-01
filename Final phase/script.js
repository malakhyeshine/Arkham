/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changei(elem){

	document.getElementById("a").classList.toggle("JB");
	document.getElementByClassName("A2").classList.toggle("JB");
	
}
function changei2(elem){
	document.getElementById("a").classList.toggle("HB");
	document.getElementByClassName("A2").classList.toggle("HB");
}
function changei3(elem){
document.getElementById("a").classList.toggle("KB");
	document.getElementByClassName("A2").classList.toggle("KB")
}
function changei4(elem){
	document.getElementById("a").classList.toggle("PB");
	document.getElementByClassName("A2").classList.toggle("PB");
}
function changei5(elem){
	document.getElementById("a").classList.toggle("RB");
	document.getElementByClassName("A2").classList.toggle("RB");
}
function changei6(elem){
	document.getElementById("a").classList.toggle("BB");
	document.getElementByClassName("A2").classList.toggle("BB");
}