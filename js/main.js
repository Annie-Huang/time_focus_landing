// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    // Set to night time to test.
    // let today = new Date(2019, 06,10, 20,33, 30),
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : "AM";

    // 12hr Format
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    hour = hour % 12 || 12;

    // Output Time
    // time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${second}`;
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zero
// Need to add zero if it's single digit, e.g. we want 11:06:09 instead of 11:6:9
function addZero(n) {
    // parse number n with base of 10.
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    // Set to night time to test.
    // let today = new Date(2019, 06,10, 20,33, 30),
    let today = new Date(),
        hour = today.getHours(); // 0 - 23

    if (hour < 12) {
        // Morning
        // Need to relative the path to the index.html.
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        //if (e.which === 13 || e.keyCode === 13) { // keyCode is deprecated.
        if (e.which === 13 || e.key === 'Enter') {
            localStorage.setItem('name', e.target.innerText);
            // When enter is clicked, we want it to move out the field, rather than go to the next line like the normal enter key will do.
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}


// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        //if (e.which === 13 || e.keyCode === 13) { // keyCode is deprecated.
        if (e.which === 13 || e.key === 'Enter') {
            localStorage.setItem('focus', e.target.innerText);
            // When enter is clicked, we want it to move out the field, rather than go to the next line like the normal enter key will do.
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();


