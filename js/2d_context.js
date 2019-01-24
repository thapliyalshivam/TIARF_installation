import {colours, sprite} from './visuals.js';



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
var translations={
x_offset:Math.random()*1000,
y_offset:Math.random()*500,
segments:38
};
var angle = (2*Math.PI)/translations.segments;

//loading textures
var img = document.getElementById("lamp1")
var pat = context.createPattern(img, "repeat");
var img = document.getElementById("lamp")
var pat1 = context.createPattern(img, "repeat");


function Render(){

const t=Date.now()/1000;

context.save();
context.translate(center.x,center.y);

for(let i=1;i<=translations.segments;++i )
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
  context.translate(translations.x_offset-vertical+Math.sin(t)*50,translations.y_offset-radius+Math.cos(t)*50);
  context.fill();
  context.restore();
}
context.restore();


 }
export {canvas,Render};
