// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        second = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : "AM";

    // 12hr Format
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    hour = hour % 12 || 12;

    // Output Time
    // time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${second}`;
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(second)}`;

    setTimeout(showTime, 1000);
}

// Add Zero
// Need to add zero if it's single digit, e.g. we want 11:06:09 instead of 11:6:9
function addZero(n) {
    // parse number n with base of 10.
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Run
showTime();



