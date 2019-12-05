var points = 0
const incrPoints= 10
const init = () => {
    var init = parseInt(new Date().getTime())
    AFRAME.registerComponent("avatar", {
        init: function () {
            this.el.addEventListener("collisions", (e) => {
                let finalTime = parseInt(new Date().getTime())
                console.log('tempo inicial: ',(typeof init))
                console.log('tempo final: ',finalTime)
                let finalPoints = 0.1*(finalTime-init) + 0.9*(points)
                alert(`Voce perdeu, pontos: ${Math.round(finalPoints)}`);
                window.location.reload();
            })
        }
    })
}
function checkKey(e){
    console.log('keycode: ',e.keyCode)
    //getPos()
    console.log('position: ',sceneEl.object3D.position)
    points += incrPoints
}
function detectKeyPress(){
    document.onkeypress = function (e) {
        console.log('tecla pressionada: ',e.key )
    };
    document.onkeydown = checkKey
}
init();
detectKeyPress()