var score = 0; //Set score to 0
var total = 4; //Total number of questions
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
	
	$(".questionForm #submit").click(function(){
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		$(".questionForm").hide();
		process(current);
		$('#q'+next).fadeIn(300);
		return false;
	});
	
	
});

//Fragen auswerten
function process(q){
		var submitted = $('input[name=q'+q+']:checked').val();
		if(submitted === sessionStorage.getItem('a'+q)){
			score++;
		}
		
	if(q === total){
		$("#results").html("Sie haben " +score+ " Punkte von 4 Punkten erreicht. <br><a href='index.html'>nochmals versuchen</a>");
	}
	return false;	
	
}

window.addEventListener('load',init,false);

