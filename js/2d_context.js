import {colours, sprite} from './visuals.js';
import ws from './socket_service.js';



//generate canvas
let canvas = document.createElement("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//allocate center
let center = {
  y : window.innerHeight/2,
    x : window.innerWidth/2
};


//radius of the flower
let radius = 1200;
console.log(colours);
let context = canvas.getContext('2d');
let patterns = [];

//texture translations

var angle = (2*Math.PI)/ws.translations.segments;

//loading textures
var img = document.getElementById("lamp1")
var pat = context.createPattern(img, "repeat");
var img = document.getElementById("lamp")
var pat1 = context.createPattern(img, "repeat");


function Render(){

//console.log(ws);
const t=Date.now()/1000;

context.save();
context.translate(center.x,center.y);

for(let i=1;i<=ws.translations.segments;++i )
{

  context.rotate(angle);
  context.beginPath();
  let vertical = radius * Math.tan(angle/2);

  context.moveTo(vertical*-1, radius*-1);
  context.lineTo(vertical, radius*-1);
  context.lineTo(0,0);
  context.closePath();
  context.fillStyle = i%2?pat:pat1;
  context.save();

  context.translate(ws.translations.x_offset-vertical+Math.sin(t)*50,ws.translations.y_offset-radius+Math.cos(t)*50);
//  context.translate(ws.translations.x_offset,ws.translations.y_offset);
  context.fill();
  context.restore();
}
context.restore();

if (ws.translations.event)
    Canvas2Image.saveAsImage(canvas, 1920, 1030, 'yo.png');

 }
export {canvas,Render};
