// let sum = (a, b) => {
//     console.log(a * b);
// };

// sum(32, 23);


// let subtraction = (a , b) => {
//     const sub = a - b;
//     return sub;
// };

// alert(subtraction(3232, 25));


//confirm('are you sure?');


// prompt('how old are you?');

// const contentBox = document.getElementById('content-box');

// const mainHeader = document.querySelector('.main-header');

// const links = document.querySelectorAll('.titles a');

// CLASSLIST

// const div = document.querySelector('#testing-div');
// console.log(div);
// div.classList.add('active');
// console.log(div.classList.contains('active'));
// div.classList.remove('active');
// console.log(div.classList.contains('active'));
// div.classList.toggle('active');
// console.log(div.classList.contains('active'));

//INNER HTML

// let div = document.querySelector('#testing-div');
// console.log(div.innerHTML);

// div.innerHTML = '<strong>Hello!</strong>';

// INSERT ADJACENTHTML

// const div = document.querySelector('#testing-div');
// const newCode = '<strong> Hello world! </strong>';
// div.insertAdjacentHTML('beforeend', newCode);
// div.insertAdjacentHTML('beforebegin', newCode);
// div.insertAdjacentHTML('afterbegin', newCode);
// div.insertAdjacentHTML('afterend', newCode);


// CREATEELEMENT 

// const newDiv = document.createElement('div');
// let addTextToDiv = 'dodana treść';
// newDiv.innerHTML = addTextToDiv;
// console.log(newDiv);

// newDiv.innerHTML = '';

// REMOVE 

// const divRemove = document.querySelector('#testing-div');
// divRemove.remove();


// STRIC MODE 

//'use strict';

// VARIABLES LET

// function getDiffrence(a, b) {
//     let result = a - b;
//     if(result < 0) {
//         result = result * -1;
//     }
//     return result;
// }

// console.log(getDiffrence(5, 7));

// const names = ['John', 'Mufasa', 'Skaza'];
// names.push('Adam');

// names.push('Ewa');

// console.log(names);

// const myArr = ['one', 'two', 3];
// myArr.push(3);
// console.log(myArr);

// const person = {
//     name: 'Kazik',
//     surname: 'Kowalsky',
// };

// console.log(person.name);
// let b = 2,
// c = 3;
// let a = b ** c

// console.log(a);

// const randomNumber = Math.floor(Math.random() * 52) + 1;
// console.log(randomNumber);

// const Table1 = ['Poland', 'Ukraine'];
// console.log(Table1);
// const firstIndexTable1 = 0;

// const firstIndex = Table1[firstIndexTable1];
// console.log(firstIndex);


// const indexOfPoland = Table1.indexOf('France');
// console.log('indexOfPoland: ', indexOfPoland);




// const allRemovedValues = myArray.splice(startAtIndex, numberOfElements);

//         categories.push('fruits');
//         categories.push('food');
//         categories.push('phones');
//         console.log('categories:', categories); // categories: ['animals', 'travel', 'fruits', 'food', 'phones']

//         const indexOfFruits = categories.indexOf('fruits');
//         console.log('indexOfFruits:', indexOfFruits); // indexOfFruits: 2

//         const removedValues = categories.splice(indexOfFruits, 1);
//         console.log('removedValues:', removedValues); // removedValues: ['fruits']
//         console.log('categories:', categories); // categories: ['animals', 'travel', 'food', 'phones']

//         const indexOfFood = categories.indexOf('food');
//         console.log('indexOfFood:', indexOfFood); // indexOfFood: 2

//         categories.splice(indexOfFood, 2);
//         console.log('categories:', categories); // categories: ['animals', 'travel']

// const MyAnimalArray = ['dog', 'cat'];
// MyAnimalArray.push('snake', 'elephant', 'monkey'); 

// const indexofDog = MyAnimalArray.indexOf('dog');
// console.log(indexofDog); // 0

// const removeDog = MyAnimalArray.splice(indexofDog, 5);
// console.log(removeDog);
// console.log(MyAnimalArray);


// const keyWordsArray = ['animals', 'cars', 'plants', 'worms', 'stones'];
// const firstCategory = keyWordsArray[3];
// console.log(firstCategory);
// const indexofCars = keyWordsArray.indexOf('cars');
// console.log(indexofCars);

// const removeCars = keyWordsArray.splice(indexofCars, 1);
// console.log(keyWordsArray);

// const whiteSpace = keyWordsArray.join(', ');
// console.log(whiteSpace);

// const HtmlWithArray = '<ul><li>' + keyWordsArray.join('</li><li>') + '</li><li>';
// console.log('HtmlWithArray: ', HtmlWithArray);

// const aniMals = ['cat', 'dog', 'snake', 'monkey', 'bat', 'scorpion'];
// const animalsArray = aniMals.split();
// const lengthAnimals = aniMals.length;
// console.log(lengthAnimals);

// console.log(indexOfSnake = aniMals.indexOf('snake'));

// let newArrayAnimals = aniMals.slice();
// console.log(newArrayAnimals);

// const Object1 = {
//     '!boom!': 'bomba',
//     '777': 'number',
//     'Mr. Dotts': 103,
// };
// console.log(Object1);
// const bestScoreJump = '777'
// const person = {
//     name: 'Kamil',
//     surname: 'Kowalsky',
// }
// person.age = 22;
// person['education'] = 'primary school'
// person.wife = 'Abigail Mentor'
// person['name'] = 'John';
// person.age++;
// person['surname'] = 'Paździoch';
// person.surname = 'Malina';
// console.log(person);

// const keyMalinaExists = person.hasOwnProperty('wife');
// console.log(keyMalinaExists);

// const calculate = {
//     add: function(a, b){
//         return a + b
//     }
// }
// console.log(calculate.add(3, 3));

// let person = {
//     name: 'Jan',
//     surname: 'Kowalsky',
//     children: {
//         son: 'Michał',
//         daughter: 'Karolina',
//     },
//     vehicles: {
//         car: 'audi b6',
//         motorcycle: 'honda Magna',
//     },
//     age: 56,
//     stature: 185 + 'cm',
//     bestScores: [
//         {
//             player: '!best',
//             points: 123,
//         },
//         {
//             player: '!worse',
//             points: 13,
//         },
//     ],
// };



// let pointsEve = 5;
// let pointsBob = pointsEve;

// pointsBob += 2;
// let eve = {name: 'Eve', points: 5};
// let bob = eve;

// bob.name = 'Bob';
// eve.points += 2;

// console.log(bob, eve);

// /// CLONE OBJECTS JSON

// eve = JSON.parse(JSON.stringify(bob));
// eve.name = 'Eve';
// eve.points = 9;

// console.log(bob);
// console.log(eve);


// OBJECT ASSIGN

// const favorites = {
//     food: 'hot-dog',
//     car: 'Mustang',
//     music: 'Pink Floyd',
// };
// const newFavorites = {
//     food: 'salads',
//     sport: 'jogging'
// };

// Object.assign(favorites, newFavorites);
// console.log(favorites);


/// SHALLOW COPY

// const johnsHouse = {
//     windows: 10,
//     rooms: {
//         living: 1,
//         bedroom: 3,
//         bathroom: 2,
//     },
// };

// const marksHouse = Object.assign({}, johnsHouse);

// console.log(marksHouse);

// marksHouse.windows = 15;
// marksHouse.rooms.bedroom = 4;

// console.log(marksHouse);




// If else if else

// const question = prompt('Do you like casts? Yes or No');
// switch (question) {
//     case 'Yes': // conditional 1 
//         alert('Great, me too!'); // instruction 1
//         break;
//     case 'No': // conditional 2
//         alert('Really?') // instruction 2
//         break;
//     default:
//         alert('You did not give a clear answer.'); // instruction 3
// };



// LOOPS

// for( let i = 0; i < 3; i++ ){
//     console.log('Loop iteration: ' + i);
//   }

// const elementsList = ['lorem', '123', 3+'c', '999'];
// for(let i = 0; i < elementsList.length; i++) {
//     if(typeof(elementsList[i]) == 'string') {
//         console.log('text from an element from elementList at index ' + i + ' is: ' + elementsList[i]);
//     };
// };

// const person = {
//     name: 'John',
//     surname: 'Doe',
//     age: 32
// };

// for(let key in person) {
//     console.log('value at key "' + key + '" in person: ' + person[key]);
// }

// const animals = ['Cat', 'Dog', 'Mouse', 'Bird'];

// for(let animal of animals) {
//     console.log(animal);
// }


// let i = 10;

// while(i >= 0) {
//     console.log(i);
//     i--;
// }

// let b = 15;

// while(b < 10){
//     console.log(b);
//     b++
// }


// let i = 0;

// do {
//     console.log(i);
//     i++
// } while (i < 10);

// let i = 15;

// do {
//     console.log(i); // 15
//     i++
// } while (i < 10);


// const menuLink = document.querySelector('.menu-link');

//         function menuClickHandler(event){
//           event.preventDefault();
//           event.currentTarget.classList.toggle('active');
//         }
        
//         menuLink.addEventListener('click', menuClickHandler);


// const menuLink = document.querySelector('.menu-link');

// menuLink.addEventListener('click', function(event){
//   event.preventDefault();
//   event.currentTarget.classList.toggle('active');
//   });

// const app = {};

// app.init = function(){
//   app.initMenuLink();
//   app.cookieMessageTimeout();
// };

// app.initMenuLink = function(){
//   const menuLink = document.querySelector('.menu-link');

//   menuLink.addEventListener('click', function(event){
//     event.preventDefault();
//     event.currentTarget.classList.toggle('active');
//   });
// };

// app.cookieMessageTimeout = function(){
//   const cookieMessage = document.querySelector('.cookie-message');

//   setTimeout(function(){
//     cookieMessage.classList.remove('visible');
//   }, 5000);
// };

// app.init();


// const numbers = [1, 3, 4, 7, 8, 13, 16, 20];

// // EXAMPLE 1

// function filteringFunction(item){
//   return item < 5;
// };

// const smallNumbers1 = numbers.filter(filteringFunction);

// console.log('smallNumbers1:', smallNumbers1); // smallNumbers1: [1, 3, 4]

// // EXAMPLE 2

// const smallNumbers2 = numbers.filter(function(item){
//   return item < 5;
// });

// console.log('smallNumbers2:', smallNumbers2); // smallNumbers2: [1, 3, 4]

// // EXAMPLE 3

// const smallNumbers3 = numbers.filter((item) => {
//   return item < 5;
// });

// console.log('smallNumbers3:', smallNumbers3); // smallNumbers3: [1, 3, 4]

// // EXAMPLE 4

// const smallNumbers4 = numbers.filter(item => item < 5);

// console.log('smallNumbers4:', smallNumbers4); // smallNumbers4: [1, 3, 4]