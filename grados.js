// toFahrenheit :: Number -> Number
//
// Convert degrees Celsius to degrees Fahrenheit.
//
// > toFahrenheit(0)
// 32
// > toFahrenheit(100)
// 212
function toFahrenheit (degreesCelsius) {
  var fa= degreesCelsius * 9 / 5 + 32
  return fa
}

console.log(toFahrenheit(32))
