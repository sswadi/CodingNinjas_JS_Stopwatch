// variables for button 
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton'); 
const resetButton = document.querySelector('#resetButton');

// Varibles for time values 
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zeros 
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for Set Interval and Timer Status 
let timerInterval = null;
let timerStatus = "paused";


// Stop watch function 
function stopWatch(){

        seconds++;
        if(seconds == 60){
            minutes++;
            seconds = 0;
            if(minutes == 60){
                hours++;
                minutes = 0;
                if(hours == 24){
                    hours= 0;
                    minutes=0;
                    seconds = 0;
                }
            } 
        }

// Setting 00 to seconds 
        if(seconds<10){
            leadingSeconds = "0" + seconds.toString();
        }
        else{
            leadingSeconds = seconds;
        }

// Setting 00 to minutes
        if(minutes<10){
            leadingMinutes = "0" + minutes.toString();
        }
        else{
            leadingMinutes = minutes;
        }

// Setting 00 to hours
        if(hours<10){
            leadingHours = "0" + hours.toString();
        }
        else{
            leadingHours = hours;
        }

// Setting hours,minutes,seconds to timer from HTML element 
        let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Adding functionality to start button 
startButton.addEventListener('click', function(){

    if(timerStatus === "paused") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startButton').innerHTML = '<i class = "fa-solid fa-pause" id = "pause"></i>';
        timerStatus = "started";
    }
   
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startButton').innerHTML = '<i class = "fa-solid fa-play" id = "start"></i>';
        timerStatus = "paused";
    }
  
});

// Adding functionality to stop button 
stopButton.addEventListener('click', function(){
    if(timerStatus === "started"){
        window.clearInterval(timerInterval);
        document.getElementById('stopButton').innerHTML = '<i class = "fa-solid fa-stop" id = "stop"></i>';
        document.getElementById('startButton').innerHTML = '<i class = "fa-solid fa-play" id = "start"></i>';
        timerStatus = "paused";
    }
});

// Adding functionality to reset button 
resetButton.addEventListener('click', function(){
    
    timerStatus = "reset";
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";

});
