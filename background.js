var portFromCS;

function connected(p) {
  portFromCS = p;
  
  portFromCS.onMessage.addListener(function(m) {
    var message = m;
    var delayInMinutes = 0.05;

    // setup for creating alarm (may need to use interval())
    browser.alarms.create({
      delayInMinutes
    });
    
    browser.alarms.onAlarm.addListener(function(alarm) {
      browser.notifications.create({
        "type": "basic",
        "iconUrl": "icons/monocle-96.png",
        "title": "Time for a break!",
        "message": m.message
//        "Stand up, stretch, get some coffee. Do anything except look at your computer for the next 20 seconds. Enjoy, you earned it!"
      });
    });  
  });
}

browser.runtime.onConnect.addListener(connected);