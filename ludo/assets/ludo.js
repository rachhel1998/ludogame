var ponterPositions={pr1:null, pr2:null, pr3:null, pr4:null, pg1:null, pg2:null, pg3:null, pg4:null, pb1:null, pb2:null, pb3:null, pb4:null, py1:null, py2:null, py3:null, py4:null};

var routeForPG=['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16','p17','p18','p19','p20','p21','p22','p23','p24','p25','p26','p27','p28','p29','p30','p31','p32','p33','p34','p35','p36','p37','p38','p39','p40','p41','p42','p43','p44','p45','p46','p47','p48','p49','p50','p51','pg1','pg2','pg3','pg4','pg5'];
var routeForPB=['p27','p28','p29','p30','p31','p32','p33','p34','p35','p36','p37','p38','p39','p40','p41','p42','p43','p44','p45','p46','p47','p48','p49','p50','p51','p52','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16','p17','p18','p19','p20','p21','p22','p23','p24','p25','pb1','pb2','pb3','pb4','pb5'];
var routeForPR=['p40','p41','p42','p43','p44','p45','p46','p47','p48','p49','p50','p51','p52','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16','p17','p18','p19','p20','p21','p22','p23','p24','p25','p26','p27','p28','p29','p30','p31','p32','p33','p34','p35','p36','p37','p38','pr1','pr2','pr3','pr4','pr5'];
var routeForPY=['p14','p15','p16','p17','p18','p19','p20','p21','p22','p23','p24','p25','p26','p27','p28','p29','p30','p31','p32','p33','p34','p35','p36','p37','p38','p39','p40','p41','p42','p43','p44','p45','p46','p47','p48','p49','p50','p51','p52','p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','py1','py2','py3','py4','py5'];

var dices=['diceForGreen','diceForYellow','diceForBlue','diceForRed'];

function getPonterPositions(){
	return ponterPositions;
}
function setPointerPositions(pointerId,xyz){
	console.log(`${pointerId}=>${xyz}`);
	ponterPositions[pointerId]=xyz;
	console.log(ponterPositions);
}
function dice_sound(){
	const audio = new Audio("assets/RollingDiceSound.wav");
	audio.play();
}

var fpG=0;
$('.pall').click(function(){
	var id = $(this).attr("id");
	//var arrPos="p"+Math.floor((Math.random() * 52) + 1);
	var arrPos=routeForPY[fpG];
	movePointer(id,arrPos);
	fpG++;
	dice_sound();
});

function movePointer(pointerId,arrPos){
	var arr=getResizeAllPositions();
	var targetPositionL=arr['allPositionsL'][arrPos];
	var targetPositionT=arr['allPositionsT'][arrPos];
	setPointerPositions(pointerId,arrPos);
	var pinter= document.getElementById(pointerId);
	var translate3dValue= "translate3d("+ targetPositionL + "px, "+ targetPositionT + "px, 0)";
	pinter.style.transform = translate3dValue;
	//console.log("hello there you click on pointer. and Id is = "+pointerId+"=>"+arrPos);
}