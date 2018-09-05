
window.addEventListener('load', loadModule);

async function loadModule() {
  const num = window.location.hash.substr(1) || 1;
  const module = await
  import (`./js/main_${num}.js`);
  document.body.appendChild(module.canvas);
  return module;
}

async function init() {
  let module = await loadModule();

  async function reload() {
    if (module && module.canvas) {
      document.body.removeChild(module.canvas);
    }
    module = await loadModule();
  }
