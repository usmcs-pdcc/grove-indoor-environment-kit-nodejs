/* 
 * Grove Indoor Environment Kit: Button
 *
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// Button at Digital pin D2
var button = new m.Gpio(2);

// Set direction INPUT for Digital pin D2
button.dir(m.DIR_IN);

setInterval(function() {
	console.log("button: " + button.read());
}, 1000);