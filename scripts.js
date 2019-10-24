// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeoff = null;
let landing = null;
let missionAbort = null;
let rocketImage = null;
let upButton = null;
let downButton = null;
let rightButton = null;
let leftButton = null;

function init () {
    missionAbort = document.getElementById("missionAbort");
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    rocketImage = document.getElementById("rocket");

    takeoff.onclick = takeoffClick;

    function takeoffClick() {
        let takeoffCheck = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffCheck) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight.";
            document.getElementById("shuttleBackground").style.backgroundColor="blue";
            document.getElementById("spaceShuttleHeight").innerHTML = Number(10000);
        }

    landing.onclick = landClick;

    function landClick() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor="green";
        document.getElementById("spaceShuttleHeight").innerHTML = Number(0);
        }
    }

    missionAbort.onclick = abortClick;

    function abortClick() {
        let abortCheck = window.confirm("Confirm that you want to abort the mission.");
        if (abortCheck) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor="green";
            document.getElementById("spaceShuttleHeight").innerHTML = Number(0);
        }
    }

    upButton.onclick = upClick;
    downButton.onclick = downClick;
    rightButton.onclick = rightClick;
    leftButton.onclick = leftClick;
    let x=0;
    let y=0;

    function rightClick() {
        rocketImage.style.transform = 'translateX(+10px)';
    }

    function leftClick() {
        rocketImage.style.transform = 'translateX(-10px)';
    }

    function upClick(){
        rocketImage.style.transform = 'translateY(+10px)';
    }

    function downClick() {
        rocketImage.style.transform = 'translateY(-10px)';
    }

    
}

window.onload = init;

// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
// 23.8.3. Bonus Mission
// If you are done with the above and have some time left during class, there are a few problems that you can tackle for a bonus mission.

// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.