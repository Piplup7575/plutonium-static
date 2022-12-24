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
say[26] = "Homework < Gaems";
say[27] = "There's a teacher behind you!";
say[28] = "sus";
say[29] = "Who said I was doing my homework?";
say[30] = "Remember to do your homework!";
say[31] = "Use this proxy only for education! 🤓🤓🤓";
say[32] = "Do not use this proxy for illegal activities!";
say[33] = "gamering";
say[34] = "Watch your back!";
say[35] = "tax evasion is not a felony and you should do it";
say[36] = "Don't do drugs - its too expensive";
say[37] = "ladies if a man comes up to you and is nice just thank them, there is no need to ask “how did you get in my house” or “im calling the cops”";
say[38] = "chi-na";
say[39] = "yipii";
say[40] = "😱";
say[41] = "when the";
say[42] = "heheheha";


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
