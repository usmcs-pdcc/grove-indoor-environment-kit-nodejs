/* 
 * Grove Indoor Environment Kit: Servo
 *
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// Buzzer at Digital pin D6
var servo = new m.Gpio(6);

// Set direction of D2 to: OUTPUT
buzzer.dir(m.DIR_OUT);

// Default state
var state = 1;

// Play noise (On/Off)
setInterval(function() {
	servo.write(state?1:0);
	state = !state;
}, 1000);