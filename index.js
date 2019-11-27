const init = () => {
    AFRAME.registerComponent("avatar", {
        init: function () {
            this.el.addEventListener("collisions", (e) => {
                alert('Voce perdeu');
                window.location.reload();
            })
        }
    })
}

init();