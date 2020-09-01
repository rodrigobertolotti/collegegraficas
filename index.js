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
    var seguridad = 0;
    if (!firebase.apps.length) {
        $.ajax({
            url:'./traerReunionActiva.php',
            type: 'GET',
            dataType: 'JSON',
            success: function(response){
                var grupo= response[0].grupo;
                firebase.initializeApp(firebaseConfig);
                obtenerDatosPasajeras(grupo);
                obtenerDatosPadres(grupo);
            },
            error: function(e) {
                console.log(e.responseText);
              }
        })
    }

}

function obtenerDatosPasajeras(grupo) {
    var nombre="/pasajeros"+grupo+"/";
    var datos = firebase.database().ref(nombre);
    datos.on('value', function (data) {
        var cantidad = 0; 
        var seguridad = 0;
        var coordinacion = 0;
        var compras = 0;
        data.forEach(function (childData) {
            cantidad++;
            seguridad += parseInt(childData.val().seguridad);
            coordinacion += parseInt(childData.val().coordinacion);
            compras += parseInt(childData.val().compras);
        })
        var promedioSeguridad = seguridad / cantidad;
        var promedioCoordinacion = coordinacion / cantidad;
        var promedioCompras = compras / cantidad;
        var ctx = document.getElementById('graficoPasajeras').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Seguridad', 'Coordinacion', 'Compras',],
                datasets: [{
                    label: 'Cantidad ' + cantidad,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [promedioSeguridad, promedioCoordinacion, promedioCompras],
                }]
            },
            
            options: {
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 10,
                            stepValue: 1,
                            max: 10
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Pasajeras'
                }
            }
        });
    })
}

function obtenerDatosPadres(grupo) {
    var nombre="/padres"+grupo+"/";
    var datos = firebase.database().ref(nombre);
    datos.on('value', function (data) {
        var cantidad = 0;
        var seguridad = 0;
        var coordinacion = 0;
        var compras = 0;
        data.forEach(function (childData) {
            cantidad++;
            seguridad += parseInt(childData.val().seguridad);
            coordinacion += parseInt(childData.val().coordinacion);
            compras += parseInt(childData.val().compras);
        })
        var promedioSeguridad = seguridad / cantidad;
        var promedioCoordinacion = coordinacion / cantidad;
        var promedioCompras = compras / cantidad;
        var ctx = document.getElementById('graficoPadres').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Seguridad', 'Coordinacion', 'Compras',],
                datasets: [{
                    label: 'Cantidad: ' + cantidad,
                    backgroundColor: 'rgb(0, 209, 183)',
                    borderColor: 'rgb(0, 209, 183);',
                    data: [promedioSeguridad, promedioCoordinacion, promedioCompras],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            steps: 10,
                            stepValue: 1,
                            max: 10
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Madre/Padre'
                }
            }
        });
    })
}


function escucharDatos() {
    const doc = db.collection('cities').doc('SF');
    const observer = doc.onSnapshot(docSnapshot => {
        console.log(`Received doc snapshot: ${docSnapshot}`);
        // ...
    }, err => {
        console.log(`Encountered error: ${err}`);
    });
}