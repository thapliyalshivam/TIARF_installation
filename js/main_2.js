import THREE from './third_party/three.js';
import {canvas,ctx}from './lib/2d_context.js';
var a =1;

function Render(){

  ++a;

ctx.fillStyle = '#002';
ctx.fillRect( a, a, 10, 10 );

}

export  {canvas,Render};
