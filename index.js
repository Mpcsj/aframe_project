const addNewCircle = () => {

    const positionX = Math.round(Math.random() * 200);
    const positionY = Math.round(Math.random() * 200);
    const duraction = Math.max(Math.round(Math.random() * 100), 7000);

    const html = `
    <a-entity position="${positionX} 50 ${positionY}" animation="property: position; to: ${positionX} -10 ${positionY}; loop: true; dur: ${duraction}">
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    </a-entity>
    `;

    console.log(html)

    $('#scene').append(html);
}

$(document).ready(() => {


    for (let i = 0; i < 100; i++) {
        addNewCircle();
    }

    setInterval( () => {
        addNewCircle(); // add de 1 em 1 segundo um novo elemento
    }, 1000)

})