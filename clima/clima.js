const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=053c8c42d70d2483530d1db0815d6d98&units=metric`)

    return resp.data.main.temp;

}




module.exports = {
    getClima
}