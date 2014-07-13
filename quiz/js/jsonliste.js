var score = 0; //Set score to 0
var total = 0; //Total number of questions global, wird dynamisch ausgelesen
var point = 1; //Points per correct answer
var highest = total * point;




//Initializer
function init(){

	sessionStorage.setItem("a1","a");
	sessionStorage.setItem("a2","a");
	sessionStorage.setItem("a3","a");
	sessionStorage.setItem("a4","a");
	sessionStorage.setItem("a5","a");
	sessionStorage.setItem("a6","a");
}


$(document).ready(function(){

	
setTimeout(function() {
//http://www.sitepoint.com/settimeout-example/

//function stbr(){

	var total = $("#listeFragen .questionForm").size();
    $("#listeFragen .questionForm").hide();
	
	$(document).on("load","#listeFragen .questionForm",function(){
		$(this).hide();
	});
	
	$("#q1").fadeIn(300);
	var current = 1;
	$("#anzahlFragen").html("Anzahl Fragen "+current+"/"+total);
	
	$(".questionForm #submit").click(function(){
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		$("#anzahlFragen").html("Anzahl Fragen "+next+"/"+total);
		$(".questionForm").hide();
		process(current);
		$('#q'+next).fadeIn(300);
		return false;
	});
	
	
	
//Fragen auswerten
function process(q){
		var submitted = $('input[name=q'+q+']:checked').val();
		if(submitted === sessionStorage.getItem('a'+q)){
			score++;
		}
		
	if(q === total){
		console.timeEnd('myTimer');
		    
		$("#results").html("Sie haben " +score+ " Punkte von " +total+ " Punkten erreicht. <br><a href='index.html'>nochmals versuchen</a>");
		$("#anzahlFragen").html("Anzahl Fragen "+total+"/"+total);
	}
	return false;	
	
}



//End stbr function
//}

//SetTimeout End, time to wait for executing this block is 300ms!
}, 300);


	
	
	
	//Javascript Format Date
	var formattedDate = new Date();
	var d = formattedDate.getDate();
	var m =  formattedDate.getMonth();
	m += 1;  // JavaScript months are 0-11
	var y = formattedDate.getFullYear();
	var H = formattedDate.getHours();
	var M = formattedDate.getMinutes();
	$("#txtDate").html(d + "." + m + "." + y + "  " + H + ":" + M);


	var listFragen = $('#listeFragen');
	
	$('#listeFragen').empty(); 

	$.getJSON('test.json', function(data) {
		$.each(data, function(i, item){
		
		listFragen.append('<form class="questionForm" id="q' + i + '" data-question="' + i + '">');
		listFragen.append('<h3>' + item.Frage + '</h3>');
		listFragen.append('<ul>');
		
			//innerhalb von JSON das Array 'item.data' auslesen und in einer Liste abfüllen		
			$.each(item.data, function(y, item2){
				listFragen.append('<li><input type="radio" name="q' + (y+1) + '" value="a" />' + item2 + '</li>');	
			});
			
		listFragen.append('</ul>');
		listFragen.append('<button id="submit">weiter >></button>');
		listFragen.append('</form>');
		
		//stbr();		
			
      	});
    });





	
	
});


window.addEventListener('load',init,false);
