const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9dc01197d7075b3ac6f9c2b4699d99f5&units=metric`);

    return resp.data.main.temp
}


module.exports = {
    getClima
}