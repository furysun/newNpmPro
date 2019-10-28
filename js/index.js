import '../css/style.css';

let state = {
    floors: 10,
    currentFloor: 6
};

document.addEventListener("DOMContentLoaded", function () {
    drawElevator();
    drawButtons();
    drawCallElevatorButton();
});

function showElevatorButtons() {
    console.log('<3!');
    document.getElementById('elevator-buttons').hidden = false;
}

function drawElevator() {
    let elevator = '';
    for (let i = state.floors; i > 0; i--) {
        elevator += '<div class="elevator">';
        elevator += '<div>' + i + '</div>';
        if (i === state.currentFloor) {
            elevator += '<div class="human">human</div>';
        }
        elevator += '</div>';
    }
    document.getElementById('root').innerHTML += elevator;
}

function drawButtons() {
    let buttons = '<div id="elevator-buttons" hidden>';

    for (let j = 1; j < state.floors + 1; j++) {
        buttons += '<div class="number-floor" ><button id="button-j" onclick="selectFloor(1)">' + j + '</button></div>';
    }
    buttons += '</div>';
    document.getElementById('root').innerHTML += buttons;
}

function drawCallElevatorButton() {
    let callElevatorButton = '<div><button id="button">push</button></div>';
    document.getElementById('root').innerHTML += callElevatorButton;
    document.getElementById('button').onclick = showElevatorButtons;
}