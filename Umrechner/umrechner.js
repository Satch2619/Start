document.getElementById("celsius-eingabefeld").addEventListener('input', celsiusUmrechnen);
document.getElementById("fahrenheit-eingabefeld").addEventListener('input', fahrenheitUmrechnen);
document.getElementById("kelvin-eingabefeld").addEventListener('input', kelvinUmrechnen);

function celsiusInFahrenheitUmrechnen(celsius) {
    return celsius * 1.8 + 32;
}

function celsiusInKelvinUmrechnen(celsius) {
    return celsius + 273.15;
}

function fahrenheitInCelsiusUmrechnen(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function fahrenheitInKelvinUmrechnen(fahrenheit) {
    return (fahrenheit - 32) / 1.8 + 273.15;
}

function kelvinInCelsiusUmrechnen(kelvin) {
    return kelvin - 273.15;
}

function kelvinInFahrenheitUmrechnen(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32;
}

function celsiusUmrechnen(event) {
    const celsius = event.target.valueAsNumber;
    document.getElementById("fahrenheit-eingabefeld").value = celsiusInFahrenheitUmrechnen(celsius);
    document.getElementById("kelvin-eingabefeld").value = celsiusInKelvinUmrechnen(celsius);
}

function fahrenheitUmrechnen(event) {
    const fahrenheit = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = fahrenheitInCelsiusUmrechnen(fahrenheit);
    document.getElementById("kelvin-eingabefeld").value = fahrenheitInKelvinUmrechnen(fahrenheit);
}

function kelvinUmrechnen(event) {
    const kelvin = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = kelvinInCelsiusUmrechnen(kelvin);
    document.getElementById("fahrenheit-eingabefeld").value = kelvinInFahrenheitUmrechnen(kelvin);
}