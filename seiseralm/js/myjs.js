
window.onload = function(){


var ausgabe = document.getElementById("but_abschicken");
ausgabe.addEventListener("click",function(){
	
	console.log("but_ausgabe wurde geklickt!");
	var ausgabe = document.getElementById("ausgabe");
	ausgabe.innerHTML += ">" + 
	                     document.forms.sportForm.sportlername.value +
	                     "," +
	                     document.forms.sportForm.strecke.value +
	                     "," +
	                     document.forms.sportForm.datum.value +
	                     "," +
	                     document.forms.sportForm.befinden.value +
	                     "<br>";	

},false);

console.log($("#befinden").val("mittel"));


};