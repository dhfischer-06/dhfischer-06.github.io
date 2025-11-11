const hInFeet = 70.0/12

var h = document.getElementById("height");
var hSel = document.getElementById("hSelect");

hSel.onchange = function() {
    if (this.value == "bananas") {
        h.innerHTML = `${hInFeet * 12/7}` + " bananas";
    } else if (this.value == "lego") {
        h.innerHTML = `${Math.round(hInFeet * 12/1.6 * 100) / 100}` + " LEGO figures";
    } else if (this.value == "paper") {
        h.innerHTML = `${Math.round(hInFeet * 12/0.004)}` + " sheets of paper";
    } else if (this.value == "males") {
        h.innerHTML = `${Math.round(hInFeet * 12/69 * 1000) / 1000}` + " average US males";
    } else {
        h.innerHTML = "";
    }
};