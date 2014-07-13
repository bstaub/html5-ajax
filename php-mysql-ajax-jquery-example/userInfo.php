<?php
	include_once('db.php');
	
	$name = $_POST['name'];
	$alter = $_POST['alter'];
	
	if(mysql_query("INSERT INTO user VALUES('$name','$alter')"))
		echo "Daten erfolgreich in Datenbank eingetragen";
	else
		echo "Fehler, Daten wurden nicht in Datenbank geschrieben";
	
?>
