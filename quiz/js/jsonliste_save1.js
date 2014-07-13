$(document).ready(function(){
	
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
			
      	});
    });






	
	
});

