
var firebaseConfig = {
    apiKey: "AIzaSyDufMrcNMbjGIOaIX6KOXvbWKmvkvi2zvU",
    authDomain: "reuform.firebaseapp.com",
    databaseURL: "https://reuform.firebaseio.com",
    projectId: "reuform",
    storageBucket: "reuform.appspot.com",
    messagingSenderId: "586376997980",
    appId: "1:586376997980:web:2e758ae8f6976353ca4a99",
    measurementId: "G-DFPTH4VK04"
};

// Initialize Firebase
window.onload = function () {
        var puntajeSeguridad = $("#puntajeSeguridad");
        puntajeSeguridad.on('change', function(){
            document.getElementById("labelSeguridad").textContent=puntajeSeguridad.val();
        })

        var puntajeCoordinacion = $("#puntajeCoordinacion");
        puntajeCoordinacion.on('change', function(){
            document.getElementById("labelCoordinacion").textContent=puntajeCoordinacion.val();
        })

        var puntajeCompras = $("#puntajeCompras");
        puntajeCompras.on('change', function(){
            document.getElementById("labelCompras").textContent=puntajeCompras.val();
        })

        if (!firebase.apps.length) {
            var tipo="";
            $.ajax({
                url: '../traerReunionActiva.php',
                type: 'GET',
                dataType: 'JSON',
                success: function (response) {
                    let grupo = response[0].grupo;
                    firebase.initializeApp(firebaseConfig);
                    document.getElementById('tipoPasajero').addEventListener('click', function(){
                        document.getElementById('tipoMadres').checked= false;
                        tipo="pasajeros";
                    })
                    document.getElementById('tipoMadres').addEventListener('click', function(){ 
                        document.getElementById('tipoPasajero').checked= false;
                        tipo="padres";
                    })
                    document.getElementById('enviar').addEventListener('click', function () {
                        insertarDatos(grupo, tipo);
                    })
                },
                error: function (e) {
                    console.log(e.responseText);
                }
            })
        }
    }

function arrayJSONPasajeras() {
            let valorSeguridad = 0;
            let valorCoordinacion = 0;
            let valorCompras = 0;
            valorSeguridad= $("#puntajeSeguridad").val();
            valorCoordinacion= $("#puntajeCoordinacion").val();
            valorCompras= $("#puntajeCompras").val();
            var data = {
                seguridad: valorSeguridad,
                coordinacion: valorCoordinacion,
                compras: valorCompras
            }
            return data;
        }

function insertarDatos(grupo, tipo) {
            var datos = arrayJSONPasajeras();
            var task = firebase.database().ref(tipo+grupo+ "/").push(datos);
            task.set(datos);
        }
