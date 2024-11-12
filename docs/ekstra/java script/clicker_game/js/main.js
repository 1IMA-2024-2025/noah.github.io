
//Quick changes
let clickPower = 1;
let totalMoney = 0;
let moneyPerSec = 0;
let moneyUpdateTimer = 1000;

//Click power
let clickPowerUpgrade = 1;
let clickUpgradePrice = 50;
let roundedUpgradePrice1 = Math.round(clickUpgradePrice);

//First super upgrade
let superUpgrade1Price = 5000;
let roundedSuperUpgrade1 = Math.round(superUpgrade1Price);

//First auto upgrade
let perSecIncrease1 = 1;
let perSecUpgrade1Price = 100;
let roundedUpgradePerSec1 = Math.round(perSecUpgrade1Price);

//Second auto upgrade
let perSecIncrease2 = 5;
let perSecUpgrade2Price = 1000;
let roundedUpgradePerSec2 = Math.round(perSecUpgrade2Price);

//Third auto upgrade
let perSecIncrease3 = 25;
let perSecUpgrade3Price = 7500;
let roundedUpgradePerSec3 = Math.round(perSecUpgrade3Price);

//Quick access
var moneyAmount = document.getElementById("moneyAmount");
var moneyAmountPerSec = document.getElementById("moneyAmountPerSec");
var tickspeed = document.getElementById("tickspeed");

//Set numbers at the start
moneyAmount.innerHTML = totalMoney;
moneyAmountPerSec.innerHTML = moneyPerSec;
tickspeed.innerHTML = moneyUpdateTimer;
document.getElementById("superShop1Cost").innerHTML = roundedSuperUpgrade1;
document.getElementById("shop0Cost").innerHTML = roundedUpgradePrice1;
document.getElementById("shop1Cost").innerHTML = roundedUpgradePerSec1;
document.getElementById("shop2Cost").innerHTML = roundedUpgradePerSec2;
document.getElementById("shop3Cost").innerHTML = roundedUpgradePerSec3;

//When the clicker is clicked
function clickerClicked() {
    totalMoney = totalMoney + clickPower;
    moneyAmount.innerHTML = totalMoney;
}

//When the clicker is upgraded
function clickerUpgrade1() {
    if (totalMoney >= roundedUpgradePrice1) {
        clickPower = clickPower + clickPowerUpgrade;
        totalMoney = totalMoney - roundedUpgradePrice1;
        moneyAmount.innerHTML = totalMoney;
        clickUpgradePrice = clickUpgradePrice * 1.2;
        roundedUpgradePrice1 = Math.round(clickUpgradePrice);
        document.getElementById("shop0Cost").innerHTML = roundedUpgradePrice1
    }
}

//The first automatic money maker upgrade
function autoUpgrade1() {
    if (totalMoney >= roundedUpgradePerSec1) {
        moneyPerSec = moneyPerSec + perSecIncrease1;
        totalMoney = totalMoney - roundedUpgradePerSec1;
        moneyAmount.innerHTML = totalMoney;
        moneyAmountPerSec.innerHTML = moneyPerSec;
        perSecUpgrade1Price = perSecUpgrade1Price * 1.2;
        roundedUpgradePerSec1 = Math.round(perSecUpgrade1Price);
        document.getElementById("shop1Cost").innerHTML = roundedUpgradePerSec1;
    }
}

//The second automatic money maker upgrade
function autoUpgrade2() {
    if (totalMoney >= roundedUpgradePerSec2) {
        moneyPerSec = moneyPerSec + perSecIncrease2;
        totalMoney = totalMoney - roundedUpgradePerSec2;
        moneyAmount.innerHTML = totalMoney;
        moneyAmountPerSec.innerHTML = moneyPerSec;
        perSecUpgrade2Price = perSecUpgrade2Price * 1.2;
        roundedUpgradePerSec2 = Math.round(perSecUpgrade2Price);
        document.getElementById("shop2Cost").innerHTML = roundedUpgradePerSec2;
    }
}

//The third automatic money maker upgrade
function autoUpgrade3() {
    if (totalMoney >= roundedUpgradePerSec3) {
        moneyPerSec = moneyPerSec + perSecIncrease3;
        totalMoney = totalMoney - roundedUpgradePerSec3;
        moneyAmount.innerHTML = totalMoney;
        moneyAmountPerSec.innerHTML = moneyPerSec;
        perSecUpgrade3Price = perSecUpgrade3Price * 1.2;
        roundedUpgradePerSec3 = Math.round(perSecUpgrade3Price);
        document.getElementById("shop3Cost").innerHTML = roundedUpgradePerSec3;
    }
}

//First superupgrade
function superUpgrade1() {
    if (totalMoney >= roundedSuperUpgrade1) {
        totalMoney = totalMoney - roundedSuperUpgrade1;
        moneyAmount.innerHTML = totalMoney;
        superUpgrade1Price = superUpgrade1Price * 1.5;
        roundedSuperUpgrade1 = Math.round(superUpgrade1Price);
        moneyUpdateTimer = moneyUpdateTimer - 100;
        tickspeed.innerHTML = moneyUpdateTimer;
        document.getElementById("superShop1Cost").innerHTML = roundedSuperUpgrade1;
    }
}


// Output message
let msg = document.getElementById("tickspeed");

let t = 200; // Timer

// Stores the setInterval ID used by
// clearInterval to stop the timer
let interval;

f1();

// Function that changes the timer
function changeTimer() {
    t = moneyUpdateTimer;
}

// Function that run at irregular intervals
function f1() {

    // Clears the previous setInterval timer
    clearInterval(interval);

    changeTimer();
    interval = setInterval(f1, t);

    totalMoney = totalMoney + moneyPerSec;
    moneyAmount.innerHTML = totalMoney;
    tickspeed.innerHTML = moneyUpdateTimer;
    if (moneyUpdateTimer <= 100) {
        document.getElementById("superUpgrade1").remove();
    }
}