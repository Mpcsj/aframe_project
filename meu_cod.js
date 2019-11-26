const sceneEl = document.querySelector('a-scene');
function htmlToElement(html) {
    console.log('draw basic scene')
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function checkKey(e){
    console.log('keycode: ',e.keyCode)
    //getPos()
    console.log('position: ',document.getElementById('player').position)
}
function detectKeyPress(){
    document.onkeypress = function (e) {
        console.log('tecla pressionada: ',e.key )
    };
    document.onkeydown = checkKey
}
function drawBasicScene(sceneEl){
    console.log('drawBasicScene')
    console.log('sceneEl: ',sceneEl)
    detectKeyPress()
    
}

console.log('Aframe: ',AFRAME)
AFRAME.registerComponent('rotation-reader', {
    tick: function () {
      // `this.el` is the element.
      // `object3D` is the three.js object.
  
      // `rotation` is a three.js Euler using radians. `quaternion` also available.
      console.log(this.el.object3D.rotation);
  
      // `position` is a three.js Vector3.
      console.log(this.el.object3D.position);
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