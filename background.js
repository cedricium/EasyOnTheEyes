var portFromCS;

function connected(p) {
  portFromCS = p;
  
  portFromCS.onMessage.addListener(function(m) {
    var delayInMinutes = 1;

    // setup for creating alarm (may need to use interval())
    browser.alarms.create({
      delayInMinutes
    });
    
    browser.alarms.onAlarm.addListener(function(alarm) {
      browser.notifications.create({
        "type": "basic",
        "iconUrl": "icons/timer-96.png",
        "title": "Time for a break!",
        "message": "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!"
      });
    });
    
    // notification created immediately upon successful connection
//    browser.notifications.create({
//      "type": "basic",
//      "iconUrl": "icons/timer-96.png",
//      "title": "Time for a break!",
//      "message": "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!"
//    });
    
  });
}

browser.runtime.onConnect.addListener(connected);