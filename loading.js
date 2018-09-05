async function loadModule() {
  const num = window.location.hash.substr(1) || 1;
  const module = await
  import (`./js/main_${num}.js`);

  document.body.appendChild(module.domElement);

}


window.addEventListener('load', loadModule);
