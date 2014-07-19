<?php
	// Datei getweather.php
//	header("content-type: text/xml");
	$w = $_GET['w'];
	$u = $_GET['u'];
//	$url = "http://weather.yahooapis.com/forecastrss?w=23707368&u=c";
	$url = "http://weather.yahooapis.com/forecastrss?w=$w&u=$u";
 
	$xml=file_get_contents($url);
	if ( $xml == false ) {echo "<error>Could not read weather data from weather.yahooapis.com.</error>";
	} else {
		echo "$xml";
	}
 
?>
