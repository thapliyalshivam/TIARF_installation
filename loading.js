async function loadModule() {
  const num = window.location.hash.substr(1) || 1;
var module;
  try {
    module = await
    import (`./js/main_${num}.js`);
} catch(e) {`enter code here`
    console.log(e);
}

   document.body.appendChild( module.domElement );
return module

}

function initalize(){
  var mod = loadModule();
}

window.addEventListener('load', initalize);
