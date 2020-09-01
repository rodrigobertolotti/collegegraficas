<?php
$connect= mysqli_connect("localhost", "root", "", "collegetest");
$query = mysqli_query($connect, "SELECT * FROM `reuniones` WHERE `activa`='1'");
while($row = mysqli_fetch_array($query)){
    $nombre= $row["grupo"];
    $retorno[] = array(
        "grupo"=> $nombre
    );
}
echo json_encode($retorno);
?>