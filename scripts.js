// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeoff = null;
let landing = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing")

    takeoff.addEventListener("click", takeoffClick);

    function takeoffClick() {
        let takeoffCheck = confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffCheck === true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in Flight."
            // document.getElementByID("shuttleBackground");
            // style.background-color='blue';
            
            
        }
    }

// button.addEventListener("click", liftoff);
// missionAbort.addEventListener("mouseover", abortMouseover);
// missionAbort.addEventListener("mouseout", abortMouseout);
// missionAbort.addEventListener("click", abortMissionClick);

// function liftoff() {
//   document.getElementById("message-text").innerHTML = "Houston, we have lift off!"
// }

// function abortMouseover() {
//   document.getElementById("abortMission");.style.background='#ff0000';
// }

// function abortMouseout() {
//   document.getElementById("abortMission");.style.background='#ffffff';
// }

// function abortMissionClick() {
//   confirm("Are you sure you want to abort the mission?")
//   }

}

window.onload = init;

// When the "Take off" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
// The flight status should change to "Shuttle in flight."
// The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
// The shuttle height should increase by 10,000 miles.
// When the "Land" button is clicked, the following should happen:
// A window alert should let the user know "The shuttle is landing. Landing gear engaged."
// The flight status should change to "The shuttle has landed."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go down to 0.
// When the "Abort Mission" button is clicked, the following should happen:
// A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
// The flight status should change to "Mission aborted."
// The background color of the shuttle flight screen should change from blue to green.
// The shuttle height should go to 0.
// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
// 23.8.3. Bonus Mission
// If you are done with the above and have some time left during class, there are a few problems that you can tackle for a bonus mission.

// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.