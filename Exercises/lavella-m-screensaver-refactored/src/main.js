import { getRandomColor, getRandomInt } from "./utils.js";
import { drawRect, drawLine, drawArc} from "./canvas-utils.js";
let ctx;
let canvas;
let btnPlay;
let btnPause;
let btnClear;
let cbRect;
let cbLine;
let cbArc;
let width;
let height;
let paused = false;
let createRectangles = true;
let createLines = true;
let createArcs = true;

const init = () => {
    canvas = document.querySelector('canvas');
    btnPlay = document.querySelector('#btn-Play');
    btnPause = document.querySelector('#btn-Pause');
    btnClear = document.querySelector('#btn-Clear');
    cbRect = document.querySelector('#cb-Rectangles');
    cbLine = document.querySelector('#cb-Lines');
    cbArc = document.querySelector('#cb-Arcs');
    ctx = canvas.getContext('2d');
    width = 640;
    height = 480;
    canvas.width = width;
    canvas.height = height;
    setupUI();
    update();
}

const update = () => {
    if (paused) return;
    requestAnimationFrame(update);
    if (createRectangles) {
        drawRandomRect(ctx);
    }
    if (createLines) {
        drawRandomLine(ctx);
    }
    if (createArcs) {
        drawRandomArc(ctx);
    }
}

const setupUI = () => {
    btnPause.onclick = () => {
        paused = true;
        console.log("paused");
    }
    btnPlay.onclick = () => {
        if (!paused) return;
        paused = false;
        console.log("unpaused");
        update();
    }
    btnClear.onclick = () => {
        drawRect(ctx, 0, 0, width, height, "white", "white");
    }
    cbRect.onclick = (e) => {
        createRectangles = e.target.checked;
    }
    cbLine.onclick = (e) => {
        createLines = e.target.checked;
    }
    cbArc.onclick = (e) => {
        createArcs = e.target.checked;
    }
    canvas.onclick = canvasClicked;
}
const canvasClicked = (e) => {
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;
    console.log(mouseX, mouseY);

    for (let i = 0; i < 10; i++) {
        let x = getRandomInt(-100, 100) + mouseX;
        let y = getRandomInt(-100, 100) + mouseY;
        let radius = getRandomInt(20, 50);
        drawArc(ctx, x, y, radius, getRandomColor(), getRandomInt(1, 20), getRandomColor());
    }
}

const drawRandomRect = (ctx) => {
    let x = getRandomInt(0, width);
    let y = getRandomInt(0, height);
    let w = getRandomInt(0, width / 2);
    let h = getRandomInt(0, height / 2);
    drawRect(ctx, x, y, w, h, getRandomColor(), getRandomColor());
}
const drawRandomLine = (ctx) => {
    let x1 = getRandomInt(-width, width);
    let y1 = getRandomInt(-height, height);
    let x2 = getRandomInt(-width / 2, width / 2);
    let y2 = getRandomInt(-height / 2, height / 2);
    let lineWidth = getRandomInt(1, 100);
    drawLine(ctx, x1, y1, x2, y2, lineWidth, getRandomColor());
}
const drawRandomArc = (ctx) => {
    let x = getRandomInt(0, width);
    let y = getRandomInt(0, height);
    let radius = getRandomInt(50, 200);
    let fillColor = getRandomColor();
    let lineWidth = getRandomInt(1, 20);
    let strokeColor = getRandomColor();
    let startAngle = getRandomInt(0, 2 * Math.PI);
    let endAngle = getRandomInt(startAngle, 2 * Math.PI);
    drawArc(ctx, x, y, radius, fillColor, lineWidth, strokeColor, startAngle, endAngle);
}

init();