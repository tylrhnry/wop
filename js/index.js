

function convertCtoF(tempC) {
    return tempC * 9/5 + 32;
}

function convertFtoC(tempF) {
    return (tempF - 32) * 5/9;
}

function domLoaded() {

    var cBox = document.getElementById("cInput");
    var fBox = document.getElementById("fInput");

    cBox.addEventListener("input", function () {
        fBox.textContent = "";
    })
    fBox.addEventListener("input", function () {
        cBox.textContent = "";
    })

    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", function () {
        if (cBox.textContent != "") {
            fTemp = convertCtoF(parseFloat(cBox.textContent));
            fBox.textContent = fTemp;
        }
        else if (fBox.textContent != "") {
            cTemp = convertFtoC(parseFloat(fBox.textContent));
            cBox.textContent = cTemp;
        }

        let errorMessage = document.getElementById("errorMessage");
        let weatherImg = document.getElementById("weatherImage");
        if (parseFloat(fTemp.textContent) > 50) {
            weatherImg.src = "warm.png";
            errorMessage.innerHTML = "";
        }
        else if (parseFloat(fTemp.textContent) < 32) {
            weatherImg.src = "cold.png";
            errorMessage.innerHTML = "";
        }
        else if (parseFloat(fTemp.textContent) >= 32 &&
                parseFloat(fTemp.textContent) <= 50) {
            weatherImg.src = "cool.png";
            errorMessage.innerHTML = "";
        }
        else if (parseFloat(fTemp.textContent) == NaN) {
            errorMessage.innerHTML = fTemp.textContent + " is not a number";
        }

    })
}














