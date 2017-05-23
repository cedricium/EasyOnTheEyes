// Code needed to create a bundled webpage
var createData = {
      type: "detached_panel",
      url: "panel.html",
      width: 600,
      height: 400
    };

// Below is the code used for clicking the icon to start countdown timer (preliminary testing)

//function startTimer() {  
//  var delayInMinutes = 0.1;
//  
//  browser.alarms.create({
//    delayInMinutes
//  });
//  
//  browser.alarms.onAlarm.addListener(function(alarm){
//    var creating = browser.windows.create(createData);
    
//    browser.notifications.create({
//      "type": "basic",
//      "iconUrl": "icons/timer-96.png",
//      "title": "Time for a break!",
//      "message": "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!",
//    });
//  });
//}

//browser.browserAction.onClicked.addListener(startTimer);

//function notify() {
//  var delayInMinutes = 0.05;
//  
//  browser.alarms.create({
//    delayInMinutes
//  });
//  
//  browser.alarms.onAlarm.addListener(function(alarm){
//    browser.notifications.create({
//      "type": "basic",
//      "iconUrl": "icons/timer-96.png",
//      "title": "Time for a break!",
//      "message": "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!",
//    });
//  });
//}

// open and attempt to make a connection
var port = browser.runtime.connect();

function testMessenging() {
  // once connection is made, send data through port
//  alert('Testing if this function works...');
  port.postMessage({message: "Hello from easyOnTheEyes.js!"});
}

function testStop() {
  alert('Goodbye!');
  port.postMessage({message: "Hello from easyOnTheEyes.js!"});
}

//document.getElementById("startBtn").addEventListener("click", notify);
//document.getElementById("startBtn").addEventListener("click", testMessenging);

var toggle = document.getElementById("toggleswitch");
toggle.addEventListener("click", function onclick(e) {
  if (toggle.checked) {
    testMessenging();
  } else {
    testStop();
  }
});