
//$.get("http://html5.stbr.ch/ajax/weatherforcast/getweather.php",function(data){
$.get("http://localhost/weatherforcast/getweather.php",function(mydata){

	var cond,temp,code,color;
//	alert("Data loaded: " + mydata);
	cond = $('yweather\\:condition', mydata);
	temp = cond.attr("temp");
	code = cond.attr("code");
 
	$("#wetterbild").attr("src", "http://l.yimg.com/a/i/us/we/52/" + code + ".gif");
	$("#temp").text(temp + " Grad Celsius");
 
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
	$("body").css("background-color",color);
 
});
