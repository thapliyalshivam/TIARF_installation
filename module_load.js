async function loadModule() {
const module = await
import (`./js/2d_context.js`);
return module;
}


async function init(){

    let module = await loadModule();

    document.body.appendChild(module.canvas);
    document.body.style.margin="0px";

      function update() {
        requestAnimationFrame(update);
        module.Render();
      }

      update();

}




//
// async function init() {
//   let module = await loadModule();
//
//   async function reload() {
//     if (module && module.canvas) {
//       try {
//         document.body.removeChild(module.canvas);
//       } catch (e) {
//
//       }
//     }
//     module = await loadModule();
//   }
//
//   window.addEventListener('hashchange', async e => {
//     reload();
//   })
// }

window.addEventListener('load', init);
