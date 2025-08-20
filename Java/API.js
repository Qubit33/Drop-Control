const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const playerImg = new Image();

let score = 0; 

const player = {
    x: 50,
    y: 100,
    width: 50,
    height: 50
};

function AdjustCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", AdjustCanvas);
AdjustCanvas();

function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Pontos: " + score, 10, 30);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    requestAnimationFrame(draw);
}

playerImg.src = "Images/player.png";
playerImg.onload = () => {
    draw();
};