let canvas = document.createElement("canvas");
canvas.height = window.innerHeight;
console.log(document.innerHeight);
console.log(document.innerWidth);
canvas.width = window.innerWidth;
let ctx = canvas.getContext('2d');

export {canvas,ctx};
