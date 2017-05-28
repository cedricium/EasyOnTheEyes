// Code needed to create a bundled webpage
var createData = {
      type: "detached_panel",
      url: "panel.html",
      width: 600,
      height: 400
    };

// open and attempt to make a connection
var port = browser.runtime.connect();

function testMessenging() {
  // once connection is made, send data through port
//  alert('Testing if this function works...');
  var duration = getSettings();
//  port.postMessage({message: "Hello World!"});
  port.postMessage({message: duration});
}

function testStop() {
//  alert('Goodbye!');
  port.postMessage({message: "Cancel Alarms"});
}

//document.getElementById("startBtn").addEventListener("click", notify);
//document.getElementById("startBtn").addEventListener("click", testMessenging);


function getSettings() {
  var d = document.getElementById("slider").value;
  
  var settings = {
    duration: d
  };
  
  return settings;
}


// turning on/off the toggle switch
var toggle = document.getElementById("toggleswitch");
toggle.addEventListener("click", function onclick(e) {
  if (toggle.checked) {
    testMessenging();
  } else {
    testStop();
  }
});


// setting the label for the slider with the current slider's value
var slider = document.getElementById("slider");
slider.addEventListener("change", function() {
  document.getElementById("label").textContent = slider.value;
  console.log(slider.value);
});

var breakSlider = document.getElementById("breakSlider");
breakSlider.addEventListener("change", function() {
  document.getElementById("breakLabel").textContent = breakSlider.value;
  console.log(breakSlider.value);
});