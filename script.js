function convertToCelsius() {
    var fahrenheitInput = document.getElementById('fahrenheit');
    var celsiusInput = document.getElementById('celsius');
    
    if (fahrenheitInput.value) {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
    }
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    
    if (celsiusInput.value) {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  }
  