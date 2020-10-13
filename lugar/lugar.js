const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const resp = await axios.get(`https://geocode.xyz/${dir}?json=1`);

    if (resp.data.length === 0) {
        throw new Error(`No hat resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}