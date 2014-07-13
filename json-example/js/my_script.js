$("button").click(function(){
	
	//$.jetJSON( "url", callback function)
	$.getJSON( "json_data.json", function(myobj){	
		$.each(myobj, function(key, value){
			$("ul").append("<li>"+value.name+"</li>");
		});
	});
	
});
