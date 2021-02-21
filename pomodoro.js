"use strict";

let workTime = +prompt("How long would you like to work?");
let breakTime = +prompt("How long would you like to rest?");

let timeRemaining = workTime;
let timeLeftToRest = breakTime;

function startTimer(timerLength){
    //var that = this;
    var minutes = 0;
    var seconds = 0;
    
    var timer;

    var maximumTime = timerLength;
    
    var startTime = new Date;
    
    this.start = function() {

        timer = setInterval(function(){

            var currentTime = new Date;
            seconds++;
            if(seconds < 0){
                seconds += 60;
            }else if(seconds === 0){
                minutes = currentTime.getMinutes() - startTime.getMinutes();
            }

            console.log(minutes + ':' + seconds);
            document.getElementById("timerDisplay").innerHTML = `Time remaining: ${maximumTime - (seconds + (minutes * 60))}`;

            if( seconds + (minutes * 60) >= maximumTime ) clearInterval( timer );

    }   , 1000);
    }

    this.stop = function() {
        clearInterval(timer);
    }

}

    var workTimer = new startTimer(workTime);
    document.getElementById("timerDisplay").innerHTML = `Time remaining: ${workTime}`;
    document.getElementById("clickStart").onclick = workTimer.start;
    document.getElementById("clickStop").onclick = workTimer.stop;

    
