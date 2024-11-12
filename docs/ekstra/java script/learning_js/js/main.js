//the console.log() gives input in the browser log
console.log("abcdefghijklmnopqrstuvwxyz");

//var, let and const are three kinds of variables in javascript
//var and let is pretty much the same, but use let
var tmp = 0;
let tmp2 = 3+7; //variables can do math
//const can never be changed after creaton
const tmp3 = 0;

//this sets the content of a variable
tmp = 2;

//you can print variables aswell
console.log(tmp2)

//this links to an html id tag (it is caps sensitive, so if you misspell it, it will not work)
var pTag = document.getElementById("p_tag");
var pPrint = document.getElementById("print")

//this changes the content of the <p> tag to what is written inside the ""
pTag.innerHTML = "Changed content using JavaScript";
//by using the "(tag).style.(style) = " you can change the style of the web-page
pTag.style.color = "rgb(255, 125, 0)";

//this changes the text of a <p> tag to the content of the "tmp2" variable
pPrint.innerHTML = tmp2;

//this is a function, it is connected to the HTML file through code
function functionTwo() {
    document.getElementById("function").innerHTML = "An external function changed this text.";
}

//this is an if else inside of a function, it can also work independently
function ifStatement() {
    if (tmp2 == 10) { //this checks if tmp2 is equal to 10
        document.getElementById("print").innerHTML = "The variable equals 10!";
    } else {
        document.getElementById("print").innerHTML = "The variable does not equal 10!";
    }
}