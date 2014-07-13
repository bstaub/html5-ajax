$("#sub").click(function(){

	//serialize form --> property and value..
	var data = $("#myForm :input").serializeArray();
	
	$.post( 
		$("#myForm").attr("action"),
		data,
		function(info){ $("#result").html(info); }
	);
	clearInput();
	
});

// don't redirect to userInfo.php, stay on the same page!
$("#myForm").submit( function(){
	return false;
});

function clearInput(){
	$("#myForm :input").each( function(){
		$(this).val('');
	});
}
