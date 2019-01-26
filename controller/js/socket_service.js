//import transformation from './accelerometer_service.js'

let ws = new WebSocket("ws://192.168.0.113:9001");

// Set event handlers.
ws.onopen = function() {


  window.addEventListener('deviceorientation',(e)=>{
let transformation = {};
      transformation.alpha = e.alpha;
      transformation.beta = e.beta;
      transformation.gamma= e.gamma;
      ws.send(JSON.stringify(transformation));
    a.innerHTML = e.alpha+"   "+e.beta+"     "+e.gamma;

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
