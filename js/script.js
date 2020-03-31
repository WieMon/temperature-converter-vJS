const celsiusInput = document.getElementById('celsius_inp');
const fahrenheitInput = document.getElementById('fahrenheit_inp');
const kelvinInput = document.getElementById('kelvin_inp');

function celsiusToFahrenheitAndKelvin(){
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = fTemp;
  kelvinInput.value = kTemp;
}

celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);