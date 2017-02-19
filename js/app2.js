$(document).ready(function(){

	$('#foo').click(function(){
		$("div").filter(".im").show(1000);
		$("div").filter(".fu").hide(1000);
		
	});

	$('#des').click(function(){
		$("div").filter(".im").show(1000);

		$("div").filter(".de").hide(1000);
	});
	$('#all').click(function(){
		$("div").filter(".im").show(1000);
	});



	$('#tarea').keyup(function(){
		var n=$(this).val().split(' ').length;
		$('#cnt').text(n);
	});

	$("#dp").datepicker();

	$('#cbg').click(function(){

		if($(".main").hasClass("bg3")){
		$('.main').removeClass("bg3");

		$('.main').addClass("bg1");

		}else if($(".main").hasClass("bg1")){
		$('.main').removeClass("bg1");

		$('.main').addClass("bg2");

		}else if($(".main").hasClass("bg2")){
		$('.main').removeClass("bg2");

		$('.main').addClass("bg1");

		}


		else{
		$('.main').addClass("bg3");

		}
		
	});

});