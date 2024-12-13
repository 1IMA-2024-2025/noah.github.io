const darkMode = document.getElementById("darkMode");
var darkCurrent = 0;

//funksjonen som bytter til og fra darkmode
function darktoggle() {
    if (/*darkMode.style.backgroundColor == "gainsboro"*/darkCurrent == true) {
        darkMode.style.backgroundColor = "gainsboro";
        darkCurrent = false;
        console.log(darkCurrent);
    } else {
        darkMode.style.backgroundColor = "rgb(65, 65, 65)";
        darkCurrent = true;
        console.log(darkCurrent);
    }
}