// haha definitely didn't steal this 
function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [];
say[0] = "Welcome!";
say[1] = "Hello!";
say[2] = "[object Object]";
say[3] = "Error 404, Blocker not found";
say[4] = "mogus";
say[5] = "Do you want to have a bad time?";
say[6] = "Do you wish to have a unfortunate experience";
say[7] = "I ask you if you are capable enough to engage in a terrible experience for yourself and I being the cause";
say[8] = "I Sans the Skeleton wish to ask if you comprehend the fact that I will give you a unfortunate time due to the fact that you ended the lives of whom I care";
say[9] = "Join our Discord!";
say[10] = "Nuclear!";
say[11] = "Pu! It's stinky in here!";
say[12] = "Radioactive!";
say[13] = "Element 94!";
say[14] = "Explosive!";
say[15] = "You keep using that word. I do not think it means what you think it means.";
say[16] = "c h a o s";
say[17] = "a- amogu- *gets shot with laser*";
say[18] = "null";
say[19] = "We didn't start the fire! It was always burning, since the world's been turning";
say[20] = "We started the fire! It was always burning, since the world's been turning";
say[21] = "epic gamer";
say[22] = "who asked";
say[23] = "no one asked";
say[24] = "whoom inquired";
say[25] = "do your homework!";


var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}