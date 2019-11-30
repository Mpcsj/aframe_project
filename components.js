var generatedElements = [];
var maxElements = 700;

const addNewCircle = () => {

    if (generatedElements.length >= maxElements) {
        return;
    }

    const positionX = generateRandomValue(400);
    const positionY = generateRandomValue(400);
    const duraction = Math.max(generateRandomValue(3000, true), 3000);

    const time = new Date().getTime();
    const id = `sphere-${time}`;

    const html = `
    <a-entity id="${id}" position="${positionX} 60 ${positionY}" animation="property: position; to: ${positionX} -20 ${positionY}; loop: true; dur: ${duraction}"
        static-body physics-collider="ignoreSleep: true" geometry="primitive: sphere; radius: 5" material="color: red">
    </a-entity>
    `;

    $('#city-area').append(html);
    generatedElements.push({ id, expiresIn: (time + duraction) })
}

// unused
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
    return Math.random() > 0.5 ? value : (-1 * value);
}

$(document).ready(() => {

    const limitPerTime = 40;
    for (let i = 1; i <= maxElements; i++) {
        if (i % limitPerTime == 0) {
            setTimeout(() => {
                addNewCircle();
            }, 300)
        } else {
            addNewCircle();
        }
    }


})