// class Cars {
//     mark = null;
//     new = null;
//     speed = 0;
//     lights = false;

// }

// class Porsche extends Cars {
//     driver = null;
//     gas = 0;

//     constructor (driver, gas) {
//         super()
//         this.driver = driver;
//         this.gas = gas
//     }

//     start() {
//         this.speed += 10;
//         this.gas -= 5;
//         this.lights = true;
//     }
// }

// let Humayscar = new Porsche("Humay", 500)
// console.log(Humayscar);

// Humayscar.start();
// Humayscar.start();
// Humayscar.start();
// Humayscar.start();
// Humayscar.start();

// 

let array = [5, 9, 4, 12, 3, 15];

let minValue = Math.min(...array);
let maxValue = Math.max(...array);

console.log(minValue, maxValue);

//  function analyzeArray (numbers) {
//     min = numbers[0];
//     max = numbers[0];
//     sum = 0;

//     for (i=0; i<numbers.length; i++){
//         if (numbers[i]< min) {
//             min = numbers[i];
//         } 
//         if (numbers[i] > max){
//             max = numbers[i];
//         }
//         sum += numbers[i];
//     }

//     const average = sum / numbers.length;
//     return [min, max, average]
// }

// console.log(analyzeArray(array));