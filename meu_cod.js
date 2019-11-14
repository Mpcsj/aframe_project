function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
function drawBasicScene(){
    var sceneEl = document.querySelector('a-scene');
    console.log('sceneEl: ',sceneEl)
    let atual = 0.7
    for(let i=0;i<30;i++){
        let elAtual =`<a-cylinder position="0 ${atual} -13" rotation="90 90 0 " radius="0.02" height="18" depth="0.2" color="#570909"></a-cylinder>`
        sceneEl.appendChild(htmlToElement(elAtual))
        atual+=0.2       
    }

}

drawBasicScene()