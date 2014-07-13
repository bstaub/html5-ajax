var http = require('http');
var sys = require('sys');
var server = http.createServer(function(req, res) {
    
 if(req.url == '/quiz/1') {
  res.writeHead(200, {
         'Content-Type': 'application/json'
     });
     res.end(JSON.stringify(getQuizJson()));
 } else if(req.url = '/html/1'){
  res.writeHead(200, {
          'Content-Type': 'application/json'
     });
     res.end(JSON.stringify(getHTMLJson())); 
 }
});
server.listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');
console.log('Server running at http://127.0.0.1:8080/quiz/1');
console.log('Server running at http://127.0.0.1:8080/html/1');


function getQuizJson() {
 return {
 "1":{
  "Frage":"Was ist JQUERY?",
  "category":"Informatik",
  "data" : ["JavaScript Library", "Suchmaschine", "Programmiersprache", "keines der Antworten"]
 },
 "2":{
  "Frage":"In welchem Land befindet sich die Seieralm?",
  "category":"Informatik",
  "data" : ["Austria", "Schweiz", "Deutschland", "Frankreich"]
 },
 "3":{
  "Frage":"Welches ist kein Element von TCM?",
  "category":"Essen",
  "data" : ["Feuer", "Wasser", "Erde", "Gold"]
 },
 "4":{
  "Frage":"Was ist JSONP?",
  "category":"Informatik",
  "data" : ["Javascript Object Array with Padding", "Fremdsprache", "was zum trinken", "CSS"]
 }

}
}
function getHTMLJson() {
 return { 
     "trackinfo":{
         "parcelnr":123456,
         "provider":"DHL",
         "trackdetails":{
             "trackdetail":[
                 {
                     "date":"01.01.2010",
                     "info":"Got parcel from Customer"
                 },
                 {
                     "date":"02.01.2010",
                     "info":"Shipped to Target depot"
                 },
                 {
                     "date":"03.01.2010",
                     "info":"Delivered to Customer"
                 }
             ]
         }
     }
 };
}
