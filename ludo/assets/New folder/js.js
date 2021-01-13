
function myMove() {
	var targetPosition="#a"+Math.floor((Math.random() * 50) + 1);
	console.log(targetPosition);
	var pinter= document.getElementById("pr1");
	var position = $(targetPosition).position();
	console.log( position.left );
	console.log( position.top );
	var translate3dValue= "translate3d("+ position.left + "px, "+ position.top + "px, 0)";
	pinter.style.transform = translate3dValue;
	myMoveY()
}
function myMoveY() {
	var targetPosition="#a"+Math.floor((Math.random() * 50) + 1);
	console.log(targetPosition);
	var pinter= document.getElementById("py1");
	var position = $(targetPosition).position();
	console.log( position.left );
	console.log( position.top );
	var translate3dValue= "translate3d("+ position.left + "px, "+ position.top + "px, 0)";
	pinter.style.transform = translate3dValue;
	myMoveB()
}
function myMoveB() {
	var targetPosition="#a"+Math.floor((Math.random() * 50) + 1);
	console.log(targetPosition);
	var pinter= document.getElementById("pb1");
	var position = $(targetPosition).position();
	console.log( position.left );
	console.log( position.top );
	var translate3dValue= "translate3d("+ position.left + "px, "+ position.top + "px, 0)";
	pinter.style.transform = translate3dValue;
	myMoveG()
}
function myMoveG() {
	var targetPosition="#a"+Math.floor((Math.random() * 50) + 1);
	console.log(targetPosition);
	var pinter= document.getElementById("pg1");
	var position = $(targetPosition).position();
	console.log( position.left );
	console.log( position.top );
	var translate3dValue= "translate3d("+ position.left + "px, "+ position.top + "px, 0)";
	pinter.style.transform = translate3dValue;
}