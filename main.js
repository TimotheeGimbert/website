// SETTING UP THE HEADER
var headerOut = '<aside><a href="https://tempsreel.nouvelobs.com/abc-lettres/proverbe-latin/nosce-te-ipsum.html" target="_blank"><h2>" Nosce Te Ipsum "</h2></a><h3>"Connais ta mesure" - Aristote</h3></aside><h1>Site Web expérimental</h1>';
document.querySelector(".headerJS").innerHTML = headerOut;

//SETTING UP THE FOOTER
var footerOut = "<a href='index.html'><h2>retour à l'accueil</h2></a>"
document.querySelector(".footerJS").innerHTML = footerOut;

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

// Mouse tracking within #zone
const zone = document.querySelector("#zone");
zone.addEventListener("mousemove", function(event) {
    const xPos = event.offsetX;
    const hslText = "hsl(" + xPos + ", 10%, 50%)";
    zone.style.backgroundColor = hslText;
});
