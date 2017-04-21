//Проверка геолокации
if (!navigator.geolocation) {
    //Ошибка геолокации
    alert('Невозможно определить ваше местоположение')
} else {
navigator.geolocation.getCurrentPosition(
    //Геолокация определена
    function(position) {

        var lat = position.coords.latitude.toFixed(3);
        var lon = position.coords.longitude.toFixed(3);

        //Дата
        var now = moment().locale('ru');

        //Текущая погода
        $.when(weather.getCurrentWeather(lat, lon)).then(function (current) {

            $('title').text('Weather ' + current.list[0].name);

            //данные
            $('.current-time').text(now.format('HH:mm'));
            $('.current-date').text(now.format('DD.MM.YY'));
            $('.current-week-day').text(now.format('dddd'));
            $('.city-name').text(current.list[0].name);
            $('.current-temp').text(current.list[0].main.temp + ' °C');
            $('.current-descr').text(current.list[0].weather[0].description);

            //иконка
            var currentImg = current.list[0].weather[0].icon;
            var img = document.getElementById("current-img");
            img.src = 'http://openweathermap.org/img/w/'+currentImg+'.png';
        });

        //Прогноз
        $.when(weather.getForecastWeather(lat, lon)).then(function (result) {
            var forecast = result.list;

            //1й день
            $('.forecast-1-date').text(now.add(1, 'd').format('dd'));
            $('.forecast-1-temp').text(forecast[0].temp.day.toFixed(0)+' °C | '+forecast[0].temp.night.toFixed(0) + ' °C');
            var fImg1 = forecast[0].weather[0].icon;
            var img1 = document.getElementById("forecast-1-icon");
            img1.src = 'http://openweathermap.org/img/w/'+fImg1+'.png';
            //2й день
            $('.forecast-2-date').text(now.add(1, 'd').format('dd'));
            $('.forecast-2-temp').text(forecast[1].temp.day.toFixed(0)+' °C | '+forecast[1].temp.night.toFixed(0) + ' °C');
            var fImg2 = forecast[1].weather[0].icon;
            var img2 = document.getElementById("forecast-2-icon");
            img2.src = 'http://openweathermap.org/img/w/'+fImg2+'.png';
            //3й день
            $('.forecast-3-date').text(now.add(1, 'd').format('dd'));
            $('.forecast-3-temp').text(forecast[2].temp.day.toFixed(0)+' °C | '+forecast[2].temp.night.toFixed(0) + ' °C');
            var fImg3 = forecast[2].weather[0].icon;
            var img3 = document.getElementById("forecast-3-icon");
            img3.src = 'http://openweathermap.org/img/w/'+fImg3+'.png';
            //4й день
            $('.forecast-4-date').text(now.add(1, 'd').format('dd'));
            $('.forecast-4-temp').text(forecast[3].temp.day.toFixed(0)+' °C | '+forecast[3].temp.night.toFixed(0) + ' °C');
            var fImg4 = forecast[3].weather[0].icon;
            var img4 = document.getElementById("forecast-4-icon");
            img4.src = 'http://openweathermap.org/img/w/'+fImg4+'.png';
        });
    }
);
}