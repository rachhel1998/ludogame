var cellSize=0;
let height_width=0;
var tamplatePadding=0;

var allPositionsL={p1:0,p2:0,p3:0,p4:0,p5:0,p6:0,p7:0,p8:0,p9:0,p10:0,p11:0,p12:0,p13:0,p14:0,p15:0,
p16:0,p17:0,p18:0,p19:0,p20:0,p21:0,p22:0,p23:0,p24:0,p25:0,p26:0,p27:0,p28:0,p29:0,p30:0,
p31:0,p32:0,p33:0,p34:0,p35:0,p36:0,p37:0,p38:0,p39:0,p40:0,p41:0,p42:0,p43:0,p44:0,p45:0,
p46:0,p47:0,p48:0,p49:0,p50:0,p51:0,p52:0,pr1:0,pr2:0,pr3:0,pr4:0,pr5:0,pb1:0,pb2:0,pb3:0,
pb4:0,pb5:0,pg1:0,pg2:0,pg3:0,pg4:0,pg5:0,py1:0,py2:0,py3:0,py4:0,py5:0};
var allPositionsT={p1:0,p2:0,p3:0,p4:0,p5:0,p6:0,p7:0,p8:0,p9:0,p10:0,p11:0,p12:0,p13:0,p14:0,p15:0,
p16:0,p17:0,p18:0,p19:0,p20:0,p21:0,p22:0,p23:0,p24:0,p25:0,p26:0,p27:0,p28:0,p29:0,p30:0,
p31:0,p32:0,p33:0,p34:0,p35:0,p36:0,p37:0,p38:0,p39:0,p40:0,p41:0,p42:0,p43:0,p44:0,p45:0,
p46:0,p47:0,p48:0,p49:0,p50:0,p51:0,p52:0,pr1:0,pr2:0,pr3:0,pr4:0,pr5:0,pb1:0,pb2:0,pb3:0,
pb4:0,pb5:0,pg1:0,pg2:0,pg3:0,pg4:0,pg5:0,py1:0,py2:0,py3:0,py4:0,py5:0};

var initialPonterPositionsL={pr1:null, pr2:null, pr3:null, pr4:null, pg1:null, pg2:null, pg3:null, pg4:null, pb1:null, pb2:null, pb3:null, pb4:null, py1:null, py2:null, py3:null, py4:null};
var initialPonterPositionsT={pr1:null, pr2:null, pr3:null, pr4:null, pg1:null, pg2:null, pg3:null, pg4:null, pb1:null, pb2:null, pb3:null, pb4:null, py1:null, py2:null, py3:null, py4:null};

var diceDivPositionsL={diceForGreen:null,diceForYellow:null,diceForBlue:null,diceForRed:null};
var diceDivPositionsT={diceForGreen:null,diceForYellow:null,diceForBlue:null,diceForRed:null};
var diceDivSize=0;

$(document).ready(function() {
  const main_div_width=$('#main_div').width();
  const main_div_height=$('#main_div').height();
  updateSizeOfBoard(main_div_height,main_div_width);
});

$(window).resize(function() {
  const main_div_width=$('#main_div').width();
  const main_div_height=$('#main_div').height();
  updateSizeOfBoard(main_div_height,main_div_width);
});

function updateSizeOfBoard(height,width){
	let top_div_h=$('#top_div').height();
	let btm_div_h=$('#btm_div').height();
	$('#ludo_main_div').height(height-(top_div_h+btm_div_h+5));
	
	let h=$('#ludo_main_div').height();
	let w=$('#ludo_main_div').width();
	if(h<=w){
		height_width=h;	
	}else{
		height_width=w;
	}
	$('#ludo_tamplate').height(height_width);
	$('#ludo_tamplate').width(height_width);
	
	cellSize=height_width/16;
	tamplatePadding=cellSize/2;
	
	console.log("cellSize="+cellSize);
	
	$('.pall').height(cellSize);
	$('.pall').width(cellSize);
	console.log("tamplatePadding="+tamplatePadding);
	console.log("height_width="+height_width);
	updateAllPositionPixels(cellSize,tamplatePadding);
	reDrowThePointerPositions();
}

function updateAllPositionPixels(cS,tP){
	//left side
	var for1L=tP+(cS*1);
	var for1T=tP+(cS*6);
	for (i=1;i<=5;i++){
		allPositionsL[`p${i}`]=for1L;
		allPositionsT[`p${i}`]=for1T;
		for1L=for1L+cS;
	}
	var for2L=tP+(cS*1);
	var for2T=tP+(cS*7);
	for (i=1;i<=5;i++){
		allPositionsL[`pg${i}`]=for2L;
		allPositionsT[`pg${i}`]=for2T;
		for2L=for2L+cS;
	}
	var for3L=tP+(cS*0);
	var for3T=tP+(cS*8);
	for (i=50;i>=45;i--){
		allPositionsL[`p${i}`]=for3L;
		allPositionsT[`p${i}`]=for3T;
		for3L=for3L+cS;
	}
	allPositionsL['p51']=tP+(cS*0);
	allPositionsT['p51']=tP+(cS*7);
	allPositionsL['p52']=tP+(cS*0);
	allPositionsT['p52']=tP+(cS*6);
	
	//right side
	var for4L=tP+(cS*9);
	var for4T=tP+(cS*6);
	for (i=19;i<=24;i++){
		allPositionsL[`p${i}`]=for4L;
		allPositionsT[`p${i}`]=for4T;
		for4L=for4L+cS;
	}
	var for5L=tP+(cS*9);
	var for5T=tP+(cS*7);
	for (i=5;i>=1;i--){
		allPositionsL[`pb${i}`]=for5L;
		allPositionsT[`pb${i}`]=for5T;
		for5L=for5L+cS;
	}
	var for6L=tP+(cS*9);
	var for6T=tP+(cS*8);
	for (i=31;i>=26;i--){
		allPositionsL[`p${i}`]=for6L;
		allPositionsT[`p${i}`]=for6T;
		for6L=for6L+cS;
	}
	allPositionsL['p25']=tP+(cS*14);
	allPositionsT['p25']=tP+(cS*7);
	
	//top side
	var for7L=tP+(cS*6);
	var for7T=tP+(cS*0);
	for (i=11;i>=6;i--){
		allPositionsL[`p${i}`]=for7L;
		allPositionsT[`p${i}`]=for7T;
		for7T=for7T+cS;
	}
	var for8L=tP+(cS*7);
	var for8T=tP+(cS*1);
	for (i=1;i<=5;i++){
		allPositionsL[`py${i}`]=for8L;
		allPositionsT[`py${i}`]=for8T;
		for8T=for8T+cS;
	}
	var for9L=tP+(cS*8);
	var for9T=tP+(cS*0);
	for (i=13;i<=18;i++){
		allPositionsL[`p${i}`]=for9L;
		allPositionsT[`p${i}`]=for9T;
		for9T=for9T+cS;
	}
	allPositionsL['p12']=tP+(cS*7);
	allPositionsT['p12']=tP+(cS*0);
	
	//buttom side
	var for10L=tP+(cS*6);
	var for10T=tP+(cS*9);
	for (i=44;i>=39;i--){
		allPositionsL[`p${i}`]=for10L;
		allPositionsT[`p${i}`]=for10T;
		for10T=for10T+cS;
	}
	var for11L=tP+(cS*7);
	var for11T=tP+(cS*9);
	for (i=5;i>=1;i--){
		allPositionsL[`pr${i}`]=for11L;
		allPositionsT[`pr${i}`]=for11T;
		for11T=for11T+cS;
	}
	var for12L=tP+(cS*8);
	var for12T=tP+(cS*9);
	for (i=32;i<=37;i++){
		allPositionsL[`p${i}`]=for12L;
		allPositionsT[`p${i}`]=for12T;
		for12T=for12T+cS;
	}
	allPositionsL['p38']=tP+(cS*7);
	allPositionsT['p38']=tP+(cS*14);
	//console.log(allPositionsL);
	//console.log(allPositionsT);
	//drwallpo();
	
	//forPointer inital positions
	
	initialPonterPositionsL['pr1']=tP+(cS*3.5);
	initialPonterPositionsT['pr1']=tP+(cS*12.5);
	initialPonterPositionsL['pr2']=tP+(cS*1.5);
	initialPonterPositionsT['pr2']=tP+(cS*12.5);
	initialPonterPositionsL['pr3']=tP+(cS*3.5);
	initialPonterPositionsT['pr3']=tP+(cS*10.5);
	initialPonterPositionsL['pr4']=tP+(cS*1.5);
	initialPonterPositionsT['pr4']=tP+(cS*10.5);
	
	initialPonterPositionsL['pb1']=tP+(cS*12.5);
	initialPonterPositionsT['pb1']=tP+(cS*10.5);
	initialPonterPositionsL['pb2']=tP+(cS*12.5);
	initialPonterPositionsT['pb2']=tP+(cS*12.5);
	initialPonterPositionsL['pb3']=tP+(cS*10.5);
	initialPonterPositionsT['pb3']=tP+(cS*10.5);
	initialPonterPositionsL['pb4']=tP+(cS*10.5);
	initialPonterPositionsT['pb4']=tP+(cS*12.5);
	
	initialPonterPositionsL['pg1']=tP+(cS*1.5);
	initialPonterPositionsT['pg1']=tP+(cS*3.5);
	initialPonterPositionsL['pg2']=tP+(cS*1.5);
	initialPonterPositionsT['pg2']=tP+(cS*1.5);
	initialPonterPositionsL['pg3']=tP+(cS*3.5);
	initialPonterPositionsT['pg3']=tP+(cS*3.5);
	initialPonterPositionsL['pg4']=tP+(cS*3.5);
	initialPonterPositionsT['pg4']=tP+(cS*1.5);
	
	initialPonterPositionsL['py1']=tP+(cS*10.5);
	initialPonterPositionsT['py1']=tP+(cS*1.5);
	initialPonterPositionsL['py2']=tP+(cS*12.5);
	initialPonterPositionsT['py2']=tP+(cS*1.5);
	initialPonterPositionsL['py3']=tP+(cS*10.5);
	initialPonterPositionsT['py3']=tP+(cS*3.5);
	initialPonterPositionsL['py4']=tP+(cS*12.5);
	initialPonterPositionsT['py4']=tP+(cS*3.5);
	
	
	diceDivPositionsL['diceForGreen']=tP+(cS*2);
	diceDivPositionsT['diceForGreen']=2;
	
	diceDivPositionsL['diceForYellow']=tP+(cS*11);
	diceDivPositionsT['diceForYellow']=2;
	
	diceDivPositionsL['diceForBlue']=tP+(cS*11);
	diceDivPositionsT['diceForBlue']=tP+(cS*13.5);
	
	diceDivPositionsL['diceForRed']=tP+(cS*2);
	diceDivPositionsT['diceForRed']=tP+(cS*13.5);
	
	$('.diceInLudo').height(cS*2);
	$('.diceInLudo').width(cS*2);
}

function getResizeAllPositions(){
	var ar=new Array();
	ar['allPositionsL']=allPositionsL;
	ar['allPositionsT']=allPositionsT;
	return ar;
}
/*
function drwallpo(){
	$("#addItemmm").empty();
	$.each(allPositionsL, function(index, value) {
		var pTop=allPositionsT[index];
		var pLeft=allPositionsL[index];
		
		$( `<div class="divP" style="left:${pLeft}px;top:${pTop}px;width:${cellSize}px;height:${cellSize}px;">${index}</div>` ).appendTo( "#addItemmm" );
		
		console.log(`${index} => left=${pLeft}; top=${pTop}`);
	});
}*/
function reDrowThePointerPositions(){
	var ponterPositions=getPonterPositions();
	$.each(ponterPositions, function(index, value) {
		if(value==0 || value==null){
			var pTop=initialPonterPositionsT[index];
			var pLeft=initialPonterPositionsL[index];
			var pinter= document.getElementById(index);
			var translate3dValue= "translate3d("+ pLeft + "px, "+ pTop + "px, 0)";
			pinter.style.transform = translate3dValue;
		}else{
			var pTop=allPositionsT[value];
			var pLeft=allPositionsL[value];
			var pinter= document.getElementById(index);
			var translate3dValue= "translate3d("+ pLeft + "px, "+ pTop + "px, 0)";
			pinter.style.transform = translate3dValue;
		}
	});
	
	$.each(diceDivPositionsL, function(index, value) {
		var dTop=diceDivPositionsT[index];
		var dLeft=diceDivPositionsL[index];
		var diceDiv= document.getElementById(index);
		var translate3dValue= "translate3d("+ dLeft + "px, "+ dTop + "px, 0)";
		diceDiv.style.transform = translate3dValue;
		
	});
}
