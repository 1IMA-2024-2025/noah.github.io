
const darkMode = document.getElementById("darkMode");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

myButton.addEventListener(
    "click",
    function () {
        myPopup.classList.add("show");
    }
);
closePopup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);

function darktoggle() {
    if (darkMode.style.backgroundColor == "gainsboro") {
        darkMode.style.backgroundColor = "rgb(65, 65, 65)";
    } else {
        darkMode.style.backgroundColor = "gainsboro";
    }
}
darktoggle()