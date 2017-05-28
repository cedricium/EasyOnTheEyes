var portFromCS;

function connected(p) {
  portFromCS = p;
  
  portFromCS.onMessage.addListener(function timer(m) {
//    var message = m;
    
    if (m.message != "Cancel Alarms") {
      var duration = m.message.duration / 60;
      
      var delayInMinutes = duration;
      var periodInMinutes = duration;

      // setup for creating alarm (may need to use interval())
      browser.alarms.create({
        delayInMinutes,
        periodInMinutes
      });
      console.log("Alarms scheduled.");
    } else {
      var clearAlarms = browser.alarms.clearAll();
      console.log("Alarms cleared.");
    }
    
    browser.alarms.onAlarm.addListener(function(alarm) {
      browser.notifications.create({
        "type": "basic",
        "iconUrl": "icons/monocle-96.png",
        "title": "Time for a break!",
//        "message": m.message
        "message": "Hopefully this works!"
//        "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!"
      });
    });
  });
}

browser.runtime.onConnect.addListener(connected);