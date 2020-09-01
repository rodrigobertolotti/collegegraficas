<?php

?>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
    <script src="/__/firebase/init.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js"></script>
    <script src="./index.js"></script>
    <title>Charts</title>
</head>

<body>
<div class="fondoHeader">
    <img class="logo" src="https://res.cloudinary.com/dyvyiepbv/image/upload/v1597084090/logo_sx8j0p.png">
    <?php
        $connect= mysqli_connect("localhost", "root", "", "collegetest");
        $query = mysqli_query($connect, "SELECT * FROM `reuniones` WHERE `activa`='1'");
        while ($row = $query->fetch_assoc()){
            $nombreReunion=$row["grupo"];
        }
        echo '<p id="nombreGrupo" class="nombreGrupo">Reunion '.$nombreReunion.'</h1>';
    ?>
        </div>
        <div class="row">
    <div class="containerPasajeras">
        <canvas id="graficoPasajeras" width="45%"></canvas>
    </div>
    <div class="containerPadres">
        <canvas id="graficoPadres" width="45%"></canvas>
    </div>
    </div>
</body>
</html>