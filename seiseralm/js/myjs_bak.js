
window.onload = function(){

//Test Console Log
var morgen = function(){
	console.log("guten Morgen");
};

var mittag = function(){
	console.log("guten Mittag");
};

morgen();
mittag();



var mycounter = function(){
	
	//lokale Variable
	//var content = "";
	
	//globale Variable ohne var, gefährlich!!
	content = "";
	for(var i = 1; i <= 10; i++){
		
		content += i + "<br />";	 
	}
	return content;
	
};

mycounter();
console.log(content);

//Test Body Ausgabe	
var ausgabe = document.getElementById("ausgabe");
ausgabe.innerHTML = "hallo test";

var ausgabe2 = document.getElementById("ausgabe2");
ausgabe2.innerHTML = mycounter();


var but1 = document.getElementById("but1");
but1.addEventListener("click",function(){
	
	console.log("but1 wurde geklickt!");
	var ausgabe3 = document.getElementById("ausgabe3");
	ausgabe3.innerHTML = mycounter();
	
},false);

var but2 = document.getElementById("but2");
but2.addEventListener("click",function(){
	
	console.log("but2 wurde geklickt!");
	var ausgabe3 = document.getElementById("ausgabe3");
	ausgabe3.innerHTML = "";
	
},false);

var but3 = document.getElementById("but3");
but3.addEventListener("click",function(){
	
	console.log("but3 wurde geklickt!");
	var ausgabe4 = document.getElementById("ausgabe4");
	ausgabe4.innerHTML = "Hallo " + document.forms.meineAdresse.vorname.value +", aus " + document.forms.meineAdresse.ort.value;
	
},false);



};