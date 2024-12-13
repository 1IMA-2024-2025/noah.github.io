const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const main = document.getElementById("main");

c.width = main.clientWidth;
c.height = main.clientHeight;

let screenWidth = 0;
let screenHeight = 0;
let screenOffsetX = 0;
let screenOffsetY = 0;

const lockAsp = 16/9;

const viewspaceWidth = 1600;
const viewspaceHeight = 900;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const keyPress = {
    upArrow: false,
    downArrow: false
}

function updateKeyboard(event, state) {
    switch (event.key) {
        case "ArrowUp":
            keyPress.upArrow = state;
            break;
        case "ArrowDown":
            keyPress.downArrow = state;
            break;
    }
}

window.addEventListener("keydown", function(event){updateKeyboard(event, true)}, true);
window.addEventListener("keyup", function(event){updateKeyboard(event, false)}, true);

function getAsp(img) {return img.width / img.height;}

function stampImage(
    c, img, x, y, width, height = width/getAsp(img),
    rotate = 0, cx = 0, cy = 0,
    cropX = 0, cropY = 0, cropWidth = 1, cropHeight = 1
)
{
    cropX *= img.width;
    cropY *= img.height;

    cropWidth *= img.width;
    cropHeight *= img.height;

    const moveX = -cropWidth/2;
    const moveY = -cropHeight/2;

    rotate = rotate % 360;
    rotate *= Math.PI/180;

    c.save();
    c.translate(x, y);
    c.translate(cx, cy);
    c.rotate(rotate);
    c.translate(-cx, -cy);
    c.scale(width/img.width, height/img.height);
    c.drawImage(
        img,
        cropX, cropY, cropWidth, cropHeight,
        moveX, moveY, cropWidth, cropHeight
    );
    c.restore();
}

function moveMatrix(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function rotationMatrix(rotate, cx, cy) {
    this.rotate = rotate;
    this.cx = cx;
    this.cy = cy;
}

function cropMatrix(cropX, cropY, cropWidth, cropHeight) {
    this.cropX = cropX;
    this.cropY = cropY;
    this.cropWidth = cropWidth;
    this.cropHeight = cropHeight;
}

function drawAdvImage(c, img, MM, RM = new rotationMatrix(0, 0, 0), CM = new cropMatrix(0, 0, 1, 1)) {
    let x = MM.x;
    let y = MM.y;
    let width = MM.width;
    let height = MM.height;

    let cx = RM.cx;
    let cy = RM.cy;

    x = x/viewspaceWidth*screenWidth + screenOffsetX;
    y = y/viewspaceHeight*screenHeight + screenOffsetY;

    width = width/viewspaceWidth*screenWidth;
    if (height != undefined) {
        height = height/viewspaceHeight*screenHeight;
    }

    cx = cx/viewspaceWidth*screenWidth;
    cy = cy/viewspaceHeight*screenHeight;

    stampImage(c, img, x, y, width, height, RM.rotate, cx, cy, CM.cropX, CM.cropY, CM.cropWidth, CM.cropHeight);
}

function updateAsp(targetAsp, forceUpdate = false) {
    if (!(c.height != main.clientHeight || c.width != main.clientWidth) && !forceUpdate) {
        return;
    }

    c.width = main.clientWidth;
    c.height = main.clientHeight;

    let currentAsp = c.width/c.height;

    if (currentAsp == targetAsp || targetAsp == 0) {
        screenwidth = c.width;
        screenHeight = c.height;
        screenOffsetX = 0;
        screenOffsetY = 0;
        return;
    }

    if (currentAsp > targetAsp) {
        screenWidth = c.height*targetAsp;
        screenHeight = c.height;
    } else {
        screenWidth = c.width;
        screenHeight = c.width/targetAsp;
    }

    screenOffsetX = (c.width - screenWidth)/2;
    screenOffsetY = (c.height - screenHeight)/2;
}

function drawAsp() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, screenOffsetX, c.height);
    ctx.fillRect(screenOffsetX+screenWidth, 0, screenOffsetX, c.height);
    ctx.fillRect(0, 0, c.width, screenOffsetY);
    ctx.fillRect(0, screenOffsetY+screenHeight, c.width, screenOffsetY);
}

updateAsp(lockAsp, true)

function randomNumber(min, max) {
    return Math.round(Math.random()*(max-min))+min;
}