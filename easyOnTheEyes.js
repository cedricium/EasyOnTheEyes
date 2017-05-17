const delayInMinutes = 0.2;
const periodInMinutes = 20;

browser.alarms.create({
  delayInMinutes,
  periodInMinutes
});


/**
 * Basic outline for how this webextension should work:
 *
 * 1. Upon opening of browser, start 20 minute countdown.
 * 2. After 20 minutes is up, show dialogue message saying "Time to rest! Look 20 ft. away from the comp
 *      for at least 20 secs.
 * 3. User must start alarm once they're ready, and step 2 is repeated.
 *
 * NOTE: realized this is only good for people who are using the web, not for programmers
 *    using their IDEs. Will need to think about this!