const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la ciudad para optener el clima',
        demand: true
    }
}).argv;

// argv.direccion
// lugar.gerLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(14.560000, -90.730003)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const ciudad = await lugar.gerLugarLatLng(direccion);

        const temperatura = await clima.getClima(ciudad.lat, ciudad.lng);
        return `la temperatura de ${ direccion} es ${temperatura}`;
    } catch (error) {
        return console.log(`No se puede determinar el clima de ${direccion}`);
    }




}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);