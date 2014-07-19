
$("#submit").click(function(){

	console.log("dropStandorte: " + $("#dropStandorte").val() );
	console.log("dropEinheit: " + $("#dropEinheit").val() );
	var wertStandort = $("#dropStandorte").val();
	var wertEinheit = $("#dropEinheit").val();

//http://where.yahooapis.com/v1/places.q('Bern')?appid=bQbRVL_V34HnK_bdHFdUsBlltwcU5kQE5fZT93Ak6UULPG3vzbpMg5gjYI2.dlXVH8-
//$.get("http://html5.stbr.ch/ajax/weatherforcast/getweather.php",function(data){
$.get("http://localhost/weatherforcast/getweather.php?w=" + wertStandort+ "&u=" + wertEinheit +"",function(mydata){

	var cond,temp,code,color,datum;
//	alert("Data loaded: " + mydata);
	cond = $('yweather\\:condition', mydata);
	temp = cond.attr("temp");
	code = cond.attr("code");
	datum = cond.attr("date");
	
	
	$("h3").text("aktuelles Wetter");
	$("#wetterbild").attr("src", "http://l.yimg.com/a/i/us/we/52/" + code + ".gif");
	$("#temp").text(temp + " Grad Celsius");
	$("#datum").text(datum);
 
	if(temp < 0){
		color="blue";
	}else if (temp < 10){
		color="green";
	}else if (temp < 20){
		color="yellow";
	}else if (temp < 30){
		color="orange";
	}else{
		color="red";
	}
	$("#box2").css("background-color",color);
 
});


	return false;

});