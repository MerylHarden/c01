//this script displays a greeting to the user based upon the current time

var today = new Date(); //create a new date object
var hourNow = today.getHours(); //find the current hour
var greeting;

//display the appropriate greeting based on the current time

/* this is how you do a multiline comment if you need to
blah blah blah */

if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');


