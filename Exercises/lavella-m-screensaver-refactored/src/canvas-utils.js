import { getRandomColor, getRandomInt } from "./utils.js";

const drawRect = (ctx, x, y, w, h, fillStyle = "black", strokeStyle = "black") => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
    ctx.closePath();
    ctx.restore();
}
const drawArc = (ctx, x, y, radius, fillStyle = "black", lineWidth = 0, strokeStyle = "black", startAngle = 0, endAngle = Math.PI * 2) => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
const drawLine = (ctx, x1, y1, x2, y2, lineWidth = 1, strokeStyle = "black") => {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = getRandomColor();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + x2, y1 + y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

export {drawRect, drawArc, drawLine};