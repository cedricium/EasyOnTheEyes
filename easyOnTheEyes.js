// Below is the code for creating a popup (not currently working)

//// function to begin countdown from 20 mins
//function startTimer(duration, display) {
//  var timer = duration, minutes, seconds;
//  setInterval(function () {
//    minutes = parseInt(timer / 60, 10);
//    seconds = parseInt(timer % 60, 10);
//    
////    minutes = minutes < 10 ? "0" + minutes : minutes;
////    seconds = seconds < 10 ? "0" + seconds : seconds;
//    
//    if (minutes < 10)
//      minutes = "0" + minutes;
//    else
//      minutes = minutes;
//    
//    if (seconds < 10)
//      seconds = "0" + seconds;
//    else
//      seconds = seconds;
//    
//    display.textContent = minutes + ":" + seconds;
//    
//    if (--timer < 0) {
//      // restarts timer
//      timer = duration;
//      
//      // alert and bell/ring once timer reaches 0 actually goes here
//      timer = 0;
//      alert("Time's up! Stand up, stretch, get some coffee. At least look away from the screen for 20 seconds!");
//    }
//  }, 1000);
//}
//
//// function to stop countdown
//
//
//// startBtn onClick listener
//document.getElementById('startBtn').addEventListener('click', function () {
//  startTimer(60, document.querySelector('#display'));
//});
//// stopBtn onClick listener
//document.getElementById('stopBtn').addEventListener('click', stopTimer);





// Below is the code used for clicking the icon to start countdown timer (preliminary testing)

function startTimer() {
  var delayInMinutes = 0.1;
  
  browser.alarms.create({
    delayInMinutes
  });
  
  browser.alarms.onAlarm.addListener(function(alarm){
    browser.notifications.create({
      "type": "basic",
      "iconUrl": "icons/timer-96.png",
      "title": "Time for a break!",
      "message": "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!",
    });
  });
}

browser.browserAction.onClicked.addListener(startTimer);