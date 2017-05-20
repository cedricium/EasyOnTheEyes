// Code needed to create a bundled webpage
var createData = {
      type: "detached_panel",
      url: "panel.html",
      width: 600,
      height: 325
    };

// Below is the code used for clicking the icon to start countdown timer (preliminary testing)

function startTimer() {  
  var delayInMinutes = 0.1;
  
  browser.alarms.create({
    delayInMinutes
  });
  
  browser.alarms.onAlarm.addListener(function(alarm){
    var creating = browser.windows.create(createData);
    
//    browser.notifications.create({
//      "type": "basic",
//      "iconUrl": "icons/timer-96.png",
//      "title": "Time for a break!",
//      "message": "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!",
//    });
  });
}

browser.browserAction.onClicked.addListener(startTimer);