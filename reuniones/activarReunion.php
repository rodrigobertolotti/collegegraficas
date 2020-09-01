<?php
$connect= mysqli_connect("localhost", "root", "", "collegetest");
if (isset($_GET["id"])){
    $id= $_GET["id"];
    $query = mysqli_query($connect, "UPDATE `reuniones` SET `activa`='1' WHERE `id`=$id");
    $query2 = mysqli_query($connect, "UPDATE `reuniones` SET `activa`='0' WHERE `id`<>$id");
}
$result = mysqli_query($connect, "SELECT * FROM `reuniones`");
?>

<p>LISTA DE REUNIONES</p>
<div id="agrego"></div>
                <?php
                    while ($row = $result->fetch_assoc()){
                        $id=$row["id"];
                        $grupo= $row["grupo"];
                        $fecha= $row["fecha"];
                        $activa=$row["activa"];
                        echo '
                        <div id="reuniones" class="reunion">
                        <div class="columna2">
                        <p class="nombre">'.$grupo.'</p>
                        <p class="fecha"> '.$fecha.'</p>
                        </div>';
                        if ($activa=="1"){
                            echo '<p class="activa">ACTIVA</p></div>';
                        }else{
                            echo '
                        <div class="columna1">
                        <button class="btnActivar" id="'.$id.'">ACTIVAR</button>
                        </div>
                        </div>
                        ';
                        };
                    }
                ?>