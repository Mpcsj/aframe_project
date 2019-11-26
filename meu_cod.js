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
    console.log('position: ',sceneEl.object3D.position)
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

AFRAME.registerComponent('user',{
    init:()=>{
        this.el.addEventListener("collisions",(e)=>{
            console.log('houve colisao')
        })
    },
    tick:()=>{
        console.log('tick function')
    }
})
drawBasicScene(sceneEl)