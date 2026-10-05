// async function fetchData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   let data = await response.json();
//   console.log(data);
// }

// fetchData();

// let add = function (num1, num2) {
//   console.log(num1 + num2);
// };

// add(30, 40);

// let add = (num1, num2) => console.log(num1 + num2);

// add(30, 50);

// let sum = (num1, num2) => {
//   console.log(num1 + num2);
//   console.log(num1 * num2);
// };
// sum(30, 50);

let numbers = [1, 9, 8, 6, 4];
let maximumnumber = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > maximumnumber) {
//     maximumnumber = numbers[i];
//   }
// }
// spread operator(...)


console.log(Math.max(...numbers));
