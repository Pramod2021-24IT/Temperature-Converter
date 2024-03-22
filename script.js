function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var conversionType = document.getElementById("conversionType").value;
    var outputTemp;
    switch (conversionType) {
        case "celsiusToFahrenheit":
            outputTemp = (inputTemp * 9/5) + 32;
            break;
        case "celsiusToKelvin":
            outputTemp = inputTemp + 273.15;
            break;
        case "fahrenheitToCelsius":
            outputTemp = (inputTemp - 32) * 5/9;
            break;
        case "kelvinToCelsius":
            outputTemp = inputTemp - 273.15;
            break;
        default:
            outputTemp = "Invalid conversion type";
            break;
    }
    document.getElementById("output").innerText = "Converted Value: " + outputTemp;
}
