const axios = require('axios');
class GeoData{
    getPriority(cityName){
        var cityCode = null;
        var engPercent = null;

    axios.get('https://www12.statcan.gc.ca/rest/census-recensement/CR2016Geo.json?lang=E&geos=CSD&cpt=24').then(response => {
        var qcCityData = (JSON.parse(response.data.substring(2)).DATA);
        for(var i = 0; i < qcCityData.length; i++){
            var city = qcCityData[i];
            if(cityName == city[4]){
                cityCode = city[0];
            }
        }
        
        axios.get('https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?lang=E&dguid='+cityCode+'&topic=10&notes=0').then(response => {
            var qcCityData = (JSON.parse(response.data.substring(2)).DATA);
            engPercent = qcCityData[11][13];
            console.log(engPercent);
            })
        })
        
    }
}
module.exports = GeoData;