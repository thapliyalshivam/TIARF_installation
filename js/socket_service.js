let canvas = document.createElement("canvas");
canvas.height = window.innerHeight;
console.log(document.innerHeight);
console.log(document.innerWidth);
canvas.width = window.innerWidth;



let context = canvas.getContext('2d');


function Render(){
context.beginPath();
   context.arc(0,0,14, 0, 2 * Math.PI, false);
   context.fillStyle = 'green';
   context.fill();
   context.lineWidth = 5;
   context.strokeStyle = '#003300';
   context.stroke();
 }
export {canvas,Render};
