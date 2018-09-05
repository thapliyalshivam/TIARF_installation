async function loadModule() {
  const num = window.location.hash.substr(1) || 1;
  const module = await
  import (`./js/main_${num}.js`);
return module

}

function initalize(){
  var mod = await loadModule();
    document.body.appendChild(mod.domElement);
}

window.addEventListener('load', initalize);
