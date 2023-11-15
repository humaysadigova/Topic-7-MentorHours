//-----Constructor Function-----

// function Car(carname, carmark) {
//     this.name = carname;
//     this.mark = carmark;
//     console.log(this);
// }
// const car1 = new Car('Model-x', 'Tesla');


//---------ToDo---------

// const todoObj = {
//     data: [],
//     completed: [],

//     addtodo: function(text) {
//         this.data.push(text);
//     },
//     completedTodo: function(indexTodo){
//         this.completed.push(this.data[indexTodo]);
//         this.data = this.data.filter((item,index) => index !== indexTodo);
//     }
// };

// todoObj.addtodo('english')
// todoObj.addtodo('topic 7');
// console.log(todoObj);

// todoObj.completedTodo(0);
// console.log(todoObj);

// function premierLeagueStandings(obj) {
//     let res = {}, arr = [];
//     for(let i in obj) {
//       if(i === '1') res[i] = obj[i];
//       else arr.push(obj[i]);
//     }
//     arr.sort();
//     for(let i = 0; i < arr.length; i++) res[i+2] = arr[i];
//     return res;
//   }