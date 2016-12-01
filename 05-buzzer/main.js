/* 
 * Grove Indoor Environment Kit: Buzzer
 *
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " m.getVersion();

// Buzzer at Digital pin D2
var buzzer = var m.Gpio(2);

// Default Buzzer state
var state = 0;

// Set direction of D2 to: OUTPUT
buzzer.dir(m.DIR_OUT);

// Play noise (On/Off)
setInterval(function() {
	buzzer.write(state?1:0);
	state = !state;
}, 1000);