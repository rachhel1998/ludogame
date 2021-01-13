function log(l){
	console.log(l);
}
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
		$('#ludo_table').height(h);
		$('#ludo_table').width(h);
	}else{
		$('#ludo_table').height(w);
		$('#ludo_table').width(w);
	}
	
	let phh=$('#a1').height();
	let pww=$('#a1').width();
	$('.pall').height(phh);
	$('.pall').width(pww);
	
	let fistBoxH=$('#divRed').height();
	let fistBoxW=$('#divRed').width();
	
}