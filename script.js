// var time = Math.random();
// time *= 5000;
// document.getElementById("box").onclick = function() {
//   document.getElementById("box").style.display="none";
//   // this.style.display="none";

//   setTimeout(function() {
//   document.getElementById("box").style.display="block";
// }, time);
// }

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for(var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random()*15)];
	}
	return color;
}

// alert(getRandomColor());

var clickedTime;
var createdTime;
var reactionTime;
var bestTime = 1000;
// var exitFlag = 0;
// Date.now()

function makeBox() {
	// if (exitFlag == 1) {
	// 	return 0;
	// }
	var time = Math.random();
	time *= 4000;
	setTimeout( function() {
		if(Math.random() > 0.5) {
			document.getElementById("box").style.borderRadius = "100px";
		}

		var top = Math.random() * 250;
		var left = Math.random() * 1000;

		document.getElementById("box").style.top = top+"px";
		document.getElementById("box").style.left = left+"px";

		document.getElementById("box").style.backgroundColor = getRandomColor();

		document.getElementById("box").style.display="block";
		createdTime = Date.now();

	}, time);
}
document.getElementById("box").onclick = function() {
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime)/1000;
	// alert(reactionTime);
	document.getElementById("time").innerHTML = reactionTime + "s";
	if(bestTime > reactionTime) {
		bestTime = reactionTime;
		document.getElementById("best-time").innerHTML = bestTime + "s";
	}
	this.style.display =  "none";
	makeBox();
}

makeBox();

document.getElementById("button").onclick = function() {
	// exitFlag = 1;
	document.getElementById("heading").style.marginTop = "50px";
	if(bestTime == 1000) {
		document.getElementById("heading").innerHTML="You didn't play a single time. Oops, you missed the game.";
	}
	else {
		document.getElementById("heading").innerHTML="Your best reaction time was " + bestTime + "s";
	}

	document.getElementById("p1").style.fontSize="2.5rem";
	document.getElementById("p1").style.marginTop="300px";
	if(bestTime == 1000) {
		document.getElementById("p1").innerHTML="Thank You for Visiting. Do play next time!";
	}
	else {
		document.getElementById("p1").innerHTML="Thank You for Playing. Visit Again !";
	}

	document.getElementById("p2").style.display="none";
	document.getElementById("box").style.display="none";
	// document.getElementById("box").style.display="none";
	document.getElementById("button").style.display="none";

}
// if(exitFlag == 1) {
// 	document.getElementById("box").style.display="none";
// }