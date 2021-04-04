const villes = ["bordeaux", "paris", "nantes", "grenoble"];
for (let ville in villes) {
    var askWeather = new XMLHttpRequest();
    askWeather.open("GET", "https://www.prevision-meteo.ch/services/json/" + villes[ville]);
    askWeather.send();
    askWeather.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200)     {
        var response = JSON.parse(this.responseText);

        var name = response.city_info.name;
        var destination = "#ville" + ville + " h1";
        document.querySelector(destination).innerHTML = name;

        var condition = response.current_condition.condition;
        var destination = "#ville" + ville + " h2";
        document.querySelector(destination).innerHTML = condition;

        var pathPic = response.current_condition.icon;
        var destination = "#ville" + ville + " div";
        var queryOut = "<img src='" + pathPic +"' alt='Meteo' title='Meteo'/>";
        document.querySelector(destination).innerHTML = queryOut;

        var temperature = response.current_condition.tmp;
        var destination = "#ville" + ville + " h3";
        document.querySelector(destination).innerHTML = temperature + " °C";
        }
      };
}