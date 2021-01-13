let usersForDice = ["diceBlue", "diceYellow", "diceGreen","diceRed"];
let prevDiceValue=0;
let totalUser = 4;

totalUser = prompt("How many players?", "2 or 3 or 4");

if(totalUser==2){
	usersForDice = ["diceBlue", "diceGreen"];
}else if(totalUser==3){
	usersForDice = ["diceBlue", "diceYellow", "diceGreen"];
}else if(totalUser<2 || totalUser>4){
	alert("Please Enter between 2 to 4, Because You Can't Play Alone or above 4 players.");
	location.reload();
}

let currentUser=-1;
function nextUser(){
	currentUser=currentUser+1;
	if(currentUser>=totalUser){
		currentUser=0;
	}
	console.log(`user = ${currentUser}`);
	return currentUser;
}

function startLudo(){
	var timer=2;
	var x = setInterval(function() {
		document.getElementById("centerDiv").innerHTML = "Game will<br>start in : "+timer+"s";
		timer=timer-1;
		if(timer<0){
			document.getElementById("centerDiv").innerHTML = "";
			clearInterval(x);
			console.log("Game Started.");
			passDiceToUser();
		}
	}, 1000);
}
$(document).ready(function() {
    startLudo();
});
function myMove() {
	var targetPosition="#a"+Math.floor((Math.random() * 50) + 1);
	console.log(targetPosition);
	var pinter= document.getElementById("pb2");
	var position = $(targetPosition).position();
	console.log( position.left );
	console.log( position.top );
	var translate3dValue= "translate3d("+ position.left + "px, "+ position.top + "px, 0)";
	pinter.style.transform = translate3dValue;
}

function passDiceToUser(){
	const cUser=nextUser();
	console.log(`addtodice user= ${cUser}`);
	$(".diceForAll").html('');
	$(`#${usersForDice[cUser]}`).html(`<div onclick="action()" class="h-75 w-75"><img src="assets/d0.png" id="img_src" height="80px"/></div>`);
}

function dice_sound(){
	const audio = new Audio("assets/RollingDiceSound.wav");
	audio.play();
}
let prevUser=-1;
function action(){
	$('#img_src').attr('src','assets/dice.gif');
	dice_sound();
	setTimeout(diceResult, 1000);
}

function diceResult(){
	const dNum=Math.floor(Math.random() * 6) + 1;
	$('#img_src').attr('src',`assets/d${dNum}.png`);
	$('#img_src').attr('height','70px');
	$('#img_src').attr('style','padding-top:5px;padding-left:5px;');
	console.log("Waiting for user action");
}
