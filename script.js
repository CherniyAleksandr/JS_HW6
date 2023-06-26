
// Домашнее задание 6. (после 14 урока)

// Решить следующие задачи:
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
// Дан массив numbers. Вывести в консоль все числа из массива

// const numbers = [3, 5, 11, 2, 8, 1, 6];

// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

// const user = {
// first_name: 'Ivan', 
// last_name: 'Ivanov', 
// age: 20, 
// salary: 500
// }


// ////////////////////////////////////////////////////=================/////////////////////////////////////////////////

// // for(i = 0; i <= 10; i++) {
//     if (i % 2 === 1)
//         console.log(i);
// }

////////////////////////

// for (let i = 55; i >= 20; i--) {
//     console.log(i);
//   }

//////////////////////////

// const numbers = [3, 5, 11, 2, 8, 1, 6];
// console.log (numbers)

///////////////////////////////

// const numbers = [3, 5, 11, 2, 8, 1, 6];
// const numbers_squared = [3**2, 5**2, 11**2, 2**2, 8**2, 1**2, 6**2]
// console.log(numbers_squared)

// const last_elem = []
// push.numbers_squared(last_elem) = last_elem

/////////////////////////////////
// 

// const user = {
//     first_name: 'Ivan',
//     last_name: 'Ivanov',
//     age: 20,
//     salary: 500
// }
//     console.log(`user's name is, ${user.first_name}, ${user.last_name}`);
//     console.log(`he is ${user.age} years old`)
// ----------------------------------------------  //
const first_name = prompt (`Введите ваше имя`);
const last_name = prompt (`Введите вашу фамилию`);
const age = +prompt (`Введите ваш возраст`)

console.log(`user's name is, ${first_name}, ${last_name}`);
console.log(`he is ${age} years old`)




