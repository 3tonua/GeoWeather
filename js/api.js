var weather = {
    //текущая погода
    getCurrentWeather: function (lat, lon) {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/find",
            data: {
                APPID: "9ef757cb577b08f60d21a4446c0a2c94",
                lat: lat,
                lon: lon,
                units: 'metric',
                lang: 'ru'
            },
            success: function( result ) {
                dfd.resolve(result);
                console.log(result)
            }
        });
        return dfd.promise();
    },
    //прогноз
    getForecastWeather: function (lat, lon) {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily",
            data: {
                APPID: "9ef757cb577b08f60d21a4446c0a2c94",
                lat: lat,
                lon: lon,
                cnt: 4,
                units: 'metric',
                lang: 'ru'
            },
            success: function( result ) {
                dfd.resolve(result);
                console.log(result)
            }
        });
        return dfd.promise();
    }
};