var score = 0; //Set score to 0
var total = 5; //Total number of questions
var point = 1; //Points per correct answer
var highest = total * point;

//Initializer
function init(){

	sessionStorage.setItem("a1","a");
	sessionStorage.setItem("a2","a");
	sessionStorage.setItem("a3","a");
	sessionStorage.setItem("a4","a");
}

$(document).ready(function(){

	$(".questionForm").hide();
	$("#q1").fadeIn(300);
	
	$("#q1 #submit").click(function(){
		$(".questionForm").hide();
		process('q1');
		$("#q2").fadeIn(300);
		return false;	
	});

	$("#q2 #submit").click(function(){
		$(".questionForm").hide();
		process('q2');
		$("#q3").fadeIn(300);
		return false;	
	});
	
	$("#q3 #submit").click(function(){
		$(".questionForm").hide();
		process('q3');
		$("#q4").fadeIn(300);
		return false;	
	});
	
	$("#q4 #submit").click(function(){
		$(".questionForm").hide();
		process('q4');
		$("#results").fadeIn(300);
		return false;	
	});
	
	
});

//Fragen auswerten
function process(q){
	if(q === "q1"){
		var submitted = $('input[name=q1]:checked').val();
		if(submitted === sessionStorage.a1){
			score++;
		}
	}
	if(q === "q2"){
		var submitted = $('input[name=q2]:checked').val();
		if(submitted === sessionStorage.a2){
			score++;
		}
	}
	if(q === "q3"){
		var submitted = $('input[name=q3]:checked').val();
		if(submitted === sessionStorage.a3){
			score++;
		}
	}
	if(q === "q4"){
		var submitted = $('input[name=q4]:checked').val();
		if(submitted === sessionStorage.a4){
			score++;
		}
		$("#results").html("Sie haben " +score+ " Punkte von 4 Punkten erreicht. <br><a href='index.html'>nochmals versuchen</a>");
	}
	return false;	
	
}

window.addEventListener('load',init,false);

