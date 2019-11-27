const sceneEl = document.querySelector('a-scene');
const pos = { x: 0, y: 0, z: 0 }
function htmlToElement(html) {
    console.log('draw basic scene')
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function checkKey(e) {
    console.log('keycode: ', e.keyCode)
    //console.log('position: ', document.querySelector('#player').getAttribute('position'))
    var cameraEl = document.querySelector('#camera');
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
    console.log('position :',JSON.stringify(worldPos));

}
function detectKeyPress() {
    document.onkeypress = function (e) {
        console.log('tecla pressionada: ', e.key)
    };
    document.onkeydown = checkKey
}
function drawBasicScene(sceneEl) {
    console.log('drawBasicScene')
    console.log('sceneEl: ', sceneEl)
    detectKeyPress()

}

console.log('Aframe: ', AFRAME)
// AFRAME.registerComponent('listener', {
//     tick: function () {
//       //console.log(this.el.getAttribute('position'));
      
//     }
//   });
AFRAME.registerComponent('rotation-reader', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.

        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        console.log('aqui',this.el.object3D.rotation);

        // `position` is a three.js Vector3.
        console.log('aqui',this.el.object3D.position);
    }
});
AFRAME.registerComponent('listener', {
    tick: function () {
      var cameraEl = this.el.sceneEl.camera.el;
      cameraEl.addEventListener('collisions',(e)=>{
          console.log('colisao')
      })
      //cameraEl.getAttribute('position');
      //cameraEl.getAttribute('rotation');
  
      // Do something.
    }
  });
  
// AFRAME.registerComponent('player',{
//     init:()=>{
//         this.el.addEventListener("collisions",(e)=>{
//             console.log('houve colisao')
//         })
//     },
//     tick:()=>{
//         console.log('tick function')
//     }
// })
drawBasicScene(sceneEl)