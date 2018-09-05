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
      try {
        document.body.removeChild(module.canvas);
      } catch (e) {

      }
    }
    module = await loadModule();
  }

  function update() {
    requestAnimationFrame(update);
    module.Render();
  }

  update();

  window.addEventListener('hashchange', async e => {
    reload();
  })
}

window.addEventListener('load', init);
