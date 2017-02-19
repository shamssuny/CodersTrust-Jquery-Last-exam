$(document).ready(function(){

	$('#name').keyup(function(){
		var n=$(this).val().length;
		if(n<3){
			$("#msg").text("at least 3");
		}
		else{
			$("#msg").text(" ");	
		}
	});


	$('#pass').keyup(function(){
		var n=$(this).val().length;
		if(n<3){
			$("#pmsg").text("Weak").css("color","red");
		}
		else if(n>3){
			$("#pmsg").text("Strong").css("color","green");	
		}
	});


	$('#login').click(function(){
		var cn ="admin";
		var cp = "admin";
		var nam=$('#name').val();
		var pass=$('#pass').val();
		var vnam=$('#name').val().length;
		var vpass=$('#pass').val().length;		
		if(vnam<3||vpass<3){
			alert("Name/pass greater than 6");
		}else if(nam==cn&&pass==cp){
			window.location.replace("profile.html");
		}

	});

	$('#reset').click(function(){
		$('#name').val(" ");
		$('#pass').val("");
	});


});