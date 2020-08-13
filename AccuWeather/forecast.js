const key = "sB8FQQNUnSO8uDcUSCeaZybMX5fIf12j";


// GET WEATHER from API
const getWeather = async(id) => {
    const resourceUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(resourceUrl + query);

    const data = await response.json();

    return data[0];
}





// GET CITY form API
const getCity = async(city) => {

    const resourceUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(resourceUrl + query);

    const data = await response.json();

    return data[0];

}