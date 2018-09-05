async function loadModule() {
  const num = window.location.hash.substr(1) || 1;
  const module = await
  import (`./js/main_${num}.js`);
   document.body.appendChild(module.domElement);
return module

}

function initalize(){
  var mod = loadModule();
}

window.addEventListener('load', initalize);
