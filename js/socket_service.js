var ws = new WebSocket("ws://localhost:9001");

// Set event handlers.
ws.translations={
x_offset:0,
y_offset:0,
segments:28
};

if (window.DeviceOrientationEvent && 'ontouchstart' in window) {

    window.addEventListener('deviceorientation',(e)=>{
        ws.translations.y_offset = (e.beta+180)*10;
        ws.translations.x_offset= (e.gamma+90)*21;
        ws.translations.event= false;

    });


} else {
  console.log("not supported")
}


ws.onopen = function() {
  console.log("onopen");
};

ws.onmessage = function(e) {
  let parsed = JSON.parse(e.data);
//  console.log(parsed);
  this.translations.x_offset = parsed.gamma;
  this.translations.y_offset = parsed.beta;
    this.translations.event = parsed.capture||false;
  //this.translations.segments = parsed.alpha;
};

ws.onclose = function() {
  console.log("onclose");
};

ws.onerror = function(e) {
  output("onerror");
  console.log(e)
};


export default ws;
