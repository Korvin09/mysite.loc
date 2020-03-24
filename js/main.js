// Кнопка мобильного меню сворачивания
document.getElementById('button_mobile__menu').onclick = function () {
    document.getElementById('button_mobile__menu').classList.toggle('active');
    document.getElementById('block_mobile__menu').classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function line1() {
    setTimeout(() => document.querySelector('.line-1').classList.add('active'), 500);
});

document.addEventListener("DOMContentLoaded", function line2() {
    setTimeout(() => document.querySelector('.line-2').classList.add('active'), 750);
});

document.addEventListener("DOMContentLoaded", function line3() {
    setTimeout(() => document.querySelector('.line-3').classList.add('active'), 1000);
});

document.addEventListener("DOMContentLoaded", function line4() {
    setTimeout(() => document.querySelector('.line-4').classList.add('active'), 1250);
});

document.addEventListener("DOMContentLoaded", function line5() {
    setTimeout(() => document.querySelector('.line-5').classList.add('active'), 1500);
});

let delay_popup = 60000;setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);




// заменим цвет фона на красный,
//document.body.style.background = "red";

// а через 5 секунд вернём как было
//setTimeout(() => document.body.style.background = "", 5000);


// 1. Получить элемент по ID и Изменить его свойство
// document.getElementById('Motion').style.backgroundColor = "#f00";


// 2. Получить элемент по классу и Изменить его свойство
// document.querySelector('.contact__info_text').style.backgroundColor = "#f00";


// 3. Получить элемент по тегу и Изменить его свойство
// document.getElementsByTagName('h1')[2].style.color = "#f00";
// let ggg = document.getElementsByTagName('h1');
// console.log(typeof ggg);


// 4. Получить элемент по принципу ребенок/родитель и Изменить его свойство
// document.querySelector('.links__info_text').parentNode.style.backgroundColor = "#f00";


// Учебные примеры
// let a = 'Vasia';
// let b = "Ivanov";
// console.log(a + ' ' + b);


// let user = {};  // Создаем объект
// console.log(user); // Должно  вывести


// let user = {     // объект
//     name: "Vasia",  // под ключом "name" хранится значение "Vasia"
//     last_name: "Ivanov",  // под ключом "last_name" хранится значение "Ivanov"
//     "User Nickname": "Terminator",  // под ключом "last_name" хранится значение "Terminator"
//     age: 30,     // под ключом "age" хранится значение 30
// };

// console.log(user); // Должно  вывести объект
// console.log(user.name); // Должно  вывести Vasia
// console.log(user.last_name); // Должно  вывести Ivanov
// console.log(user["User Nickname"]); // Должно  вывести Terminator
// console.log(user.age); // Должно  вывести 30

// delete user.age;
// console.log(user.age); // Должно  вывести undefined
// console.log(user); // Должно  вывести объект

// user.city = "Sumy"; // Добавляем свойство город
// console.log(user); // В объект должно добавиться свойство city: "Sumy"

// let new_user = user; // ссылка на объект
// console.log(user);
// console.log(new_user); //

// new_user.cauntry = "Ukraine";
// console.log(new_user);

// console.log(user == new_user);
// console.log(user === new_user);


// let myNewArray = new Array();
// let myNewArray = [];
// console.log(myNewArray);

// let fruits = ["Яблоко", "Апельсин", "Слива"];
//
// console.log( fruits); // Массив
// console.log( fruits[0] ); // Яблоко
// console.log( fruits[1] ); // Апельсин
// console.log( fruits[2] ); // Слива

// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// console.log( fruits[2] ); // Груша
// console.log( fruits ); // Груша

// console.log( fruits.length ); // 3

// for (let i = 0; i < fruits.length; i++) {
//     console.log( fruits[i] );
// }


// for (let keys in fruits) {
//     console.log( fruits[keys] ); // Яблоко, Апельсин, Груша
// }
//
// function message() {
//     console.log( 'Привет Мир!' );
// }
// message();
//
//
// function sum(a, b) {
//     return a + b;
// }
//
// let result = sum(1, 2);
// let result2 = sum(88, 2);
// let result3 = sum(12, 8);
// let result4 = sum(55, 44);
// console.log( result ); // 3
// console.log( result2 ); // 3
// console.log( result3 ); // 3
// console.log( result4 ); // 3


// let user = {
//     first_name: 'Vasia',
//     last_name: 'Ivanov',
//     nick_name: 'Terminator',
//     email: 'VasiaTerminator@gmail.con',
//     password: 'Qq12345*'
// };
//
// let user_admin = {
//     __proto__:user,
//
//     changePassword: true,
//     changeLogin: true,
//     blockUser: true,
//     deleteUser: true,
// };
//
// console.log(user);
// console.log(user_admin);
// console.log(user_admin.nick_name);
// console.log(user_admin.changePassword);


// class User {
//     constructor(first_name, password) {
//         this.first_name = first_name;
//         this.password = password;
//     }
//
//     validatePass() {
//         if (this.password.length <= 7) {
//             console.log('Вы ввели слишком слабый пароль');
//         } else {
//             console.log('Все ок продолжаем дальше');
//         }
//     }
// }
//
// let name1 = 'Vasia1';
// let pass1 = '12345';
//
// let name2 = 'Vasia2';
// let pass2 = '123456';
//
// let name3 = 'Vasia3';
// let pass3 = '1234578';
//
// let name4 = 'Vasia4';
// let pass4 = '1234567890';
//
//
// let registerUser1 = new User(name1, pass1);
// let registerUser2 = new User(name2, pass2);
// let registerUser3 = new User(name3, pass3);
// let registerUser4 = new User(name4, pass4);
//
//
// console.log(registerUser1);
// console.log(registerUser1.validatePass());
//
// console.log(registerUser2);
// console.log(registerUser2.validatePass());
//
// console.log(registerUser3);
// console.log(registerUser3.validatePass());
//
// console.log(registerUser4);
// console.log(registerUser4.validatePass());
