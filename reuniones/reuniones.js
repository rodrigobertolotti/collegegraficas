window.onload = function () {
    var botones = document.getElementsByClassName("btnActivar");
    for (var i = 0, length = botones.length; i < length; i++) {
        botones[i].addEventListener('click', function () {
            var idActivo=this.id;
            var data = {
                "id": idActivo
            }
            $.ajax({
                type: "GET",
                url: "activarReunion.php",
                data: data,
                success: function () {
                    var desactivo= document.getElementsByClassName("activa")[0]
                    var idDesactivo= desactivo.id;
                    document.getElementById(idActivo).innerHTML= "<p id="+idActivo+" class='activa'>ACTIVA</p>";
                    desactivo.className="btnActivar";
                    desactivo.id=idDesactivo;
                    desactivo.innerHTML= "ACTIVAR";
                },
                error: function (xhr, error) {
                    console.debug(xhr); 
                    console.debug(error);
                },
            })
        })
    }

    document.getElementById("crearReunion").addEventListener('click', function(){
        var nombreLiceo= document.getElementById("nombreGrupo").value;
        var fecha= document.getElementById("fechaReunion").value
        var datos = {
            "grupo": nombreLiceo,
            "fecha": fecha 
        }
        $.ajax({
            type:'GET',
            url: 'agregarReunion.php',
            data: datos,
            success: function(){
                document.getElementById("agrego").appendChild('<h1>hola</h1>');
            },
            error: function(error){
                alert(error.responseText);
            }
        })
    })

    
}