// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

function toFahrenheit(celsius){
    
    let fahrenheit = (celsius * 1.8) + 33.8;
    return fahrenheit;
}

const fahrenheit = toFahrenheit(20);
console.log(fahrenheit);