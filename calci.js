// Light - Dark Theme
const container = document.querySelector('.container');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    container.classList.toggle('active');
}

// Calculator 
const screen = document.getElementById('screen');

function number(value) {
    screen.value += value;
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

// function per() { //  % wrong
//     screen.value = screen.value;
// }

function lan() {
    screen.value = Math.log(screen.value);
}

function log() {
    screen.value = Math.log10(screen.value);
}

function square() {
    screen.value = Math.pow(screen.value, 2);
}

function pi() {
    screen.value = screen.value * Math.PI;
}

function sqrt2() {
    screen.value = Math.pow(screen.value, 1 / 2);

}

function Del() {
    screen.value = screen.value.slice(0, -1);
}

function equal() {
    screen.value = eval(screen.value);
}

