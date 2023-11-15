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
    },
    log: function() {
      console.log('This:', this);
  
      function secondFthis() {
        console.log('secondFthis:', this);
      };
      secondFthis();
      const secondFthis2 = () => {
        console.log('secondFthis2', this);
      }
      secondFthis2();
    },
    log2: () => {
      console.log('arrow:', this);
    }
  
  }

console.log(car.hasOwnProperty('marka'));
  
// //   car.log();
// //   car.log2();
  
// //   function A() {
// //     console.log('A:', this);
// //   };
// //   A();  
  
// const person = {
//     fullname: 'Michael Cohen',
//     job: 'Web Developer',

//     skills: function(){}
// };

// person.age = 35;

// delete person.skills;

// // console.log(person);

// // for (key in person) {
// //     console.log(key);
// // }

// const result = Object.values(person);
// console.log(result);

// const result2 = Object.keys(person);
// console.log(result2);

// const result3 = Object.entries(person);
// console.log(result3);

// ----------------------Form------------------------------

// const formPerson = document.querySelector('#personal');
// const personList = document.querySelector('#personlist');
// const memberInfo = document.querySelector('#memberInfo');
// const people = [];

// console.log(memberInfo.dataset);

// formPerson.addEventListener("submit", function(e){
//     e.preventDefault();

//     const name = this.name.value;
//     const age = this.age.value;
//     const salary = this.salary.value;
//     const img_url = this.img_url.value;

//     // const person = {
//     //     name: name,
//     //     age: age,
//     //     salary: salary
//     // };

//     const person = {
//         name,
//         age,
//         salary,
//         img_url
//     }

//     people.push(person);
//     // console.log(people);

//     const content = people.map((personObj, index) => `
//     <div class="card" style="width: 16rem;">
//         <img src="${personObj.img_url}" class="card-img-top" alt="${personObj.img_url}">
//         <div class="card-body">
//           <p class="card-title">${personObj.name}</p>
//           <p class="card-text">${personObj.age}</p>
//           <p class="card-text">${personObj.salary}</p>
//         </div>
//     </div>
//     `).join("");
//     personList.innerHTML = content;
// });



