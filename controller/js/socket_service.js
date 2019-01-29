//import transformation from './accelerometer_service.js'

let ws = new WebSocket("ws://192.168.43.48:9001");
let capture = false;
// Set event handlers.
ws.onopen = function() {

let transformation = {};
  window.addEventListener('deviceorientation',(e)=>{

      transformation.alpha = (e.alpha)*14.8;
      transformation.beta = (e.beta+180)*10;
      transformation.gamma= (e.gamma+90)*21;
      transformation.capture= capture;
      ws.send(JSON.stringify(transformation));
      capture = false;
    a.innerHTML = e.alpha+"   "+e.beta+"     "+e.gamma;

  });

  window.addEventListener('click', (e)=>{
    transformation.capture= capture;
  capture = true;

  });
  console.log("onopen");
};

ws.onmessage = function(e) {
  console.log("onmessage: " + e.data);
};

ws.onclose = function() {
  console.log("onclose");
};

ws.onerror = function(e) {
  output("onerror");
  console.log(e)
};
//ws.send(transformation);
