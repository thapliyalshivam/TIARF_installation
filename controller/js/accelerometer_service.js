
let a = document.querySelector('.dri');

let transformation={
  alpha:0,
  beta:0,
  gamma:0
};

window.addEventListener('deviceorientation',(e)=>{

    transformation.alpha = e.alpha;
      transformation.beta = e.beta+180;
        transformation.gamma= e.gamma+90;
  a.innerHTML = e.alpha+"   "+e.beta+"     "+e.gamma;

});

export default transformation;
