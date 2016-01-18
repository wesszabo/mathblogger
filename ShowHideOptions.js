$(document).ready(function(){

$('.show_hide').showHide({
speed: 1000, // speed you want the toggle to happen
easing: '', // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
changeText: 1, // if you dont want the button text to change, set this to 0
showText: 'View',// the button text to show when a div is closed
hideText: 'Close' // the button text to show when a div is open

});
