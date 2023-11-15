

// function sum(a) {
//     return function(b) {
//         return a+b;
//     };
// };

// // var a =sum(9);

// // console.log(a);

// // var b = a(4);

// // console.log(b);

// var c = sum(9)(4);
// console.log(c);

//  qısa forma 
// const total = a => b => a+b;
// console.log(total(9)(4));


// OBYEKTLƏR-----------------

// JSON (JS Object National-------------)
// const student = {
//   name: 'Musrafa',
//   surname: 'Mamedov',
//   age: 36,
//   '1skill': 'MS Office',
//   marride: null,
//   children:[{
//     name: 'Aysel',
//     age: 8
//   }]
// }
// let result = student.age;
// let result2 = student['1skill']
// let result3 = student.children[0].name;

// console.log(result3);
// console.log(result);
// console.log(result2);


// ------------------------------

const car = {
  name: 'Model 3',
  marka: 'Tesla',
  isnew: true,
  speed: 0,
  randomSpeed: 0,
  light: false,

  start: function () {
    this.speed += 10;
    this.monitor();
  },
  monitor: function (driver = 'Driver') {
    let info = `${driver} ${this.marka} | ${this.name} - ${this.speed}`
    console.log(info);
  },
  break: function () {
    this.speed -= 5;
    this.monitor();
  },
  getRandom: function(){
    const randomS = Math.ceil(Math.random() * 40);
    this.speed += randomS;
    this.monitor();
  },
  stop: function () {
    this.speed = 0;
  },
  toggleLight: function() {
    let newValue = this.light ? false : true;
    this.light = newValue;
  }

}


// car.start();
// car.start();
// car.break();
// car.getRandom();
// // car.stop()
// car.toggleLight();
// car.toggleLight();
// car.toggleLight();
// car.monitor('John');
// console.log(res);
