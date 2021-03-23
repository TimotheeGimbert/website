
// On va tracker la position de la souris dans la "zone"
 const zone = document.querySelector("#zone");
zone.addEventListener("mousemove", function(event) {
    const xPos = event.offsetX;

    const hslText = "hsl(" + xPos + ", 10%, 50%)";
    zone.style.backgroundColor = hslText;
});