const sceneEl = document.querySelector('a-scene');
function htmlToElement(html) {
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

drawBasicScene(sceneEl)