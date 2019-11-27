var generatedElements = [];

const addNewCircle = () => {

    if (generatedElements.length >= 150) {
        return;
    }

    const positionX = generateRandomValue(250);
    const positionY = generateRandomValue(250);
    const duraction = Math.max(generateRandomValue(400, true), 1500);

    const time = new Date().getTime();
    const id = `sphere-${time}`;

    const html = `
    <a-entity id="${id}" position="${positionX} 50 ${positionY}" animation="property: position; to: ${positionX} -50 ${positionY}; loop: true dur: ${duraction}"
        static-body physics-collider="ignoreSleep: true" geometry="primitive: sphere; radius: 1.5">
    </a-entity>
    `;

    $('#scene').append(html);
    generatedElements.push({ id, expiresIn: (time + duraction) })
}

const removeExpired = () => {
    const time = new Date().getTime();
    generatedElements.forEach(i => {
        if (time >= i.expiresIn) {
            // nao funciona e nao faco ideia porque. ta na documentação
            // try {
                // document.querySelector('#scene').querySelector(`#${i.id}`).destroy();
                // $(`#${i.id}`).remove();
            // } catch (e) { }
        }
    })
    generatedElements = generatedElements.filter(i => time < i.expiresIn);
}

const generateRandomValue = (range, positive) => {
    const value = Math.round(Math.random() * range);
    if (positive) {
        return value;
    }
    return Math.round() > 0.5 ? value : -value;
}

$(document).ready(() => {

    setInterval(() => {
        for (let i = 0; i < 20; i++) {
            addNewCircle();
        }
        removeExpired();
    }, 1000)


})