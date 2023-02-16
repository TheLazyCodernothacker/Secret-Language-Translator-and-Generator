var req = true;
function add(asdf,fdas){return "case " + "'" + asdf + "':var newChar = " + "'" + fdas + "';break;"}
while (req == true){var asdf = prompt("enter");if(asdf == 'destroy'){req = false};var fdas = prompt("enter");console.log(add(asdf,fdas))}