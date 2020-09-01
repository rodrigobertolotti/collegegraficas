<?php
$connect= mysqli_connect("localhost", "root", "", "collegetest");
$nombre=$_GET["grupo"];
$fecha=$_GET["fecha"];
$query= "INSERT INTO `reuniones` (`grupo`, `fecha`, `activa`) VALUES ('$nombre', '$fecha', '0')";
$ejecuto= mysqli_query($connect, $query);
echo $nombre . $fecha;
?>