setInterval(setClock, 1000)



function setClock() {
    var sceendHand = document.querySelector("[sceend_hand]")
    var miniteHand = document.querySelector("[minite_hand]")
    var hourHand = document.querySelector("[hour_hand]")
    var currentDate = new Date();
    var sceend = (currentDate.getSeconds()) / 60;
    var minite = (sceend + currentDate.getMinutes()) / 60;
    var hour = (minite + currentDate.getHours()) / 12;

    setTime(sceendHand, sceend)
    setTime(miniteHand, minite)
    setTime(hourHand, hour)

}


function setTime(element, timeing) {
    element.style.setProperty("--rotation", timeing * 360)

}
setClock()