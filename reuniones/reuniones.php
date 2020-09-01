<?php
$connect= mysqli_connect("localhost", "root", "", "collegetest");
$result = mysqli_query($connect, "SELECT * FROM `reuniones`");
?>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="./reuniones.css">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
        <script src="/__/firebase/init.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>
        <script src="./reuniones.js"></script>
        <title>Charts</title>
    </head>
    <body>
        <div class="principal">
            <div class="box">
                <p>CREAR NUEVA REUNION</p>
                <input id="nombreGrupo" placeholder="Nombre del grupo">
                <br>
                <input id="fechaReunion" type="date" placeholder="Fecha de la reunion">
                <br>
                <button id="crearReunion">CREAR</button>
            </div>
            <div class="box">
                <div id="proxReu">
                <p>LISTA DE REUNIONES</p>
                <?php
                    while ($row = $result->fetch_assoc()){
                        $id=$row["id"];
                        $grupo= $row["grupo"];
                        $fecha= $row["fecha"];
                        $activa=$row["activa"];
                        echo '
                        <div class="reunion">
                        <div class="columna2">
                        <p class="nombre">'.$grupo.'</p>
                        <p class="fecha"> '.$fecha.'</p>
                        </div>';
                        if ($activa=="1"){
                            echo '<p id="'.$id.'" class="activa">ACTIVA</p></div>';
                        }else{
                            echo '
                        <div class="columna1">
                        <p class="btnActivar" id="'.$id.'">ACTIVAR</p>
                        </div>
                        </div>';
                        };
                    }
                ?>
                </div>
            </div>
        </div>
    </body>
</html>