const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const lat = coordenadas.lat;
        const lgn = coordenadas.lng;
        const weather = await clima.getClima(lat, lgn);

        return `El clima de ${direccion} es de ${weather}°c.`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    // Salida
    // El clima de ... es de ...
    // Error
    // No se pudo determinar el clima de ...

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);