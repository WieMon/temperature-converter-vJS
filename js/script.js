const celsiusInput = document.getElementById('celsius_inp');
const fahrenheitInput = document.getElementById('fahrenheit_inp');
const kelvinInput = document.getElementById('kelvin_inp');

function roundNum(num){
  return Math.round(num*100)/100;
}

function celsiusToFahrenheitAndKelvin(){
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin(){
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp + 459.67) * 5/9;
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFahrenheit(){
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9/5 * (kTemp - 273) + 32;
  celsiusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

function main(){
  celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
  kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}

main();