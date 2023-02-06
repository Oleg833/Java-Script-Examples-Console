console.log('Good');

//Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// const makeShef = (shefName) => {
//     return function makeDish(dish) {
//         console.log(`${shefName} is cooking ${dish}`);
//     };
// };

// const mango = makeShef("Mango");
// console.dir(mango);
// mango("Salad");
// const poly = makeShef("Poly");
// poly("Borshch");

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return [...this.potions];
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       // console.log(`This element = ${potion.name}`);
//       if (potion.name === potionName) {
//         potionIndex = i;
//         // console.log(`Warning! Potion ${potionName} is already in your inventory!`);
//       }
//     }
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     potionIndex = -1;
//     let potion;
//     for (let i = 0; i < this.potions.length; i++) {
//       potion = this.potions[i];
//       if (potion.name === oldName) {
//         potionIndex = i;
//       }
//     }
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     this.potions[potionIndex].name = newName;
//   },
//   // Change code above this line
// };

// console.table(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// console.log(atTheOldToad.removePotion('Invisibility'));
// atTheOldToad.addPotion({ name: "Dragon breath", price: 780 });
// atTheOldToad.updatePotionName('Dragon breath', 'Aligator breath');
// console.table(atTheOldToad.getPotions());
// console.log('Good');

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
// const Bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(Bmw.getBrand());
// Bmw.changeBrand('Honda');
// console.log(Bmw);

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (number, index) {
//     totalPrice += number;
//     console.log(`Індекс Test ${index}, значення ${number}`);
//     console.log(`Total = ${totalPrice}`);
//   });
//   // Change code above this line
//   return totalPrice;
// }

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));
//   console.log(totalPrice);
//   return totalPrice;
// };

// calculateTotalPrice([12, 85, 37, 4]);

// const numbers = [5, 10, 15, 20, 25];
// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }
// Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const testCourses = students.flatMap(({ courses }) => courses);
// console.log(testCourses);

// const uniqueCourses = testCourses.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueCourses);

// const userName = students.filter(students => students.courses.includes('фізика'));
// console.log(userName);
// const isName = userName.map(({ name }) => name);
// console.log(isName);

// const nameArray = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getActiveUsers = users => users.filter(user => user.isActive).map(({ name }) => name);
// console.log(getActiveUsers(nameArray));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);

// const getNamesSortedByFriendCount = users =>
//   [...users].sort((a, b) => a.friends.length - b.friends.length).map(a => a.name);
// console.log(getNamesSortedByFriendCount(nameArray));

// const getSortedFriends = users =>
//   users
//     .flatMap(a => a.friends)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort();
// console.log(getSortedFriends(nameArray));
// const getTotalBalanceByGender = (users, gender) =>
//   users.filter(a => a.gender === gender).reduce((sum, user) => sum + user.balance, 0);

// console.log(getTotalBalanceByGender(nameArray, 'male'));
// console.log(getTotalBalanceByGender(nameArray, 'female'));
// const players = users => users.map(({ name, age }) => ({ name, age }));
// console.log(players(nameArray));

// const ageReduce = users =>
//   users.map(({ name, age }) => ({ name, age })).map(users => ({ ...users, age: users.age + 100 }));
// console.table(ageReduce(nameArray));

// // Change code below this line
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

// const sortByDescendingFriendCount = users =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);
// console.log(sortByDescendingFriendCount(nameArray));
// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName(nameArray));

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort((a, b) => a.score - b.score);
// console.log(inAscendingScoreOrder);
// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);
// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);

// const itemElements = document.querySelectorAll('.item');
// console.log(`Number of categories: ` + itemElements.length);
// const resultArray = [...itemElements]
//   .map(
//     item => `Category: ${item.children[0].textContent}
//     Elements: ${item.children[1].children.length}`
//   )
//   .join('\n');
// console.log(resultArray);

// firstElementChild и lastElementChild
// const listOfCategory = document.querySelector('#categories');
// const listOfClassItem = listOfCategory.querySelectorAll('.item');
// console.log(`Number of categories: ${listOfClassItem.length}`);
// listOfClassItem.forEach(item => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

// const listCategories = document.querySelector('#categories');
// const liWithClasses = listCategories.querySelectorAll('.item');
// console.log('Number of categories:', liWithClasses.length);
// for (let liWithClass of liWithClasses) {
//   console.log('Category:', liWithClass.firstElementChild.textContent);
//   console.log('Elements:', liWithClass.lastElementChild.children.length);
// }

// const totalCategories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${totalCategories.length}`);
// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Category: ${categories.children[0].textContent}
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join('\n');

// const elemantItem = document.querySelectorAll('.item');
// // elemantItem.style.textTransform = 'uppercase';
// // elemantItem.style.fontSize = '44px';
// console.log(elemantItem);
// const categories = document.querySelector('body');
// // categories.classList.toggle('is-hidden');
// // categories.style.opacity = 1;
// // document.body.classList.add('is-hidden');

// const bodyItems = document.querySelectorAll('.item');
// console.log(bodyItems[0].children[0].textContent);
// console.log(bodyItems[0].firstElementChild.nextElementSibling.children.length);
// console.log(bodyItems[0].lastElementChild.children.length);
// console.log(bodyItems[0].children[1].children.length);

// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// // const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('\n');
// const markup = ingredients.reduce(
//   (acc, ingredient) => acc + `<li class="item">${ingredient}</li>`,
//   ''
// );
// console.log(markup);
// document.querySelector('#ingredients').innerHTML = markup;

// const fragment = new DocumentFragment();

// for (const value of ingredients) {
//   const itemOfIngredientsEl = document.createElement('li');
//   itemOfIngredientsEl.classList.add('item');
//   console.log(`Name of potions: ${value}`);
//   itemOfIngredientsEl.textContent = value;
//   console.log(itemOfIngredientsEl.textContent);
//   fragment.appendChild(itemOfIngredientsEl);
// }
// document.querySelector('#ingredients').append(fragment);

// const categories = document.querySelector('body');
// // categories.classList.toggle('is-hidden');
// categories.classList.add('is-hidden');
// categories.style.opacity = 1;
// document.body.classList.add('is-hidden');

// const markup = images
//   .map(
//     ({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" width="1260"></li>`
//   )
//   .join('');
// const fdd = images.reduce(
//   (acc, { url, alt }) =>
//     acc + `<li class="gallery-item"><img src="${url}" alt="${alt}" width="1260"></li>`,
//   ''
// );
// console.log(fdd);
// const list = document.querySelector('ul.gallery');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular gallery</h2>');

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const makeImageCard = ({ url, alt }) => {
//   const imageCardEl = document.createElement('li');
//   imageCardEl.classList.add('product__card');

//   const titleEl = document.createElement('h2');
//   titleEl.classList.add('product__name');
//   titleEl.textContent = 'USERNAMES';
//   titleEl.style.color = 'yellowgreen';

//   const myImageEl = document.createElement('img');
//   myImageEl.classList.add('product__images');
//   myImageEl.src = url;
//   myImageEl.alt = alt;
//   myImageEl.width = 320;
//   myImageEl.style.display = 'block';
//   myImageEl.style.paddingTop = '10px';

//   const imageTextEl = document.createElement('p');
//   imageTextEl.textContent = alt;
//   imageTextEl.style.fontSize = '24px';
//   imageTextEl.style.fontWeight = 500;
//   imageTextEl.style.color = 'tomato';

//   imageCardEl.append(titleEl, myImageEl, imageTextEl);

//   return imageCardEl;
// };

// const fragmentDiv = new DocumentFragment();
// let startSize = 30;

// const divCreator = length => {
//   const divEl = document.createElement('div');
//   divEl.style.margin = '10px';
//   divEl.style.width = startSize + 'px';
//   divEl.style.height = startSize + 'px';
//   divEl.style.backgroundColor = generator;
//   return fragmentDiv.append(divEl);
// };
// startSize += 10;
// const imageGalery = images.map(makeImageCard);
// document.querySelector('#ingredients').append(...imageGalery);
// const makeProductCard = (name = 'default', description = 'default', price = 0, { url, alt }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');
//   nameEl.style.color = 'yellowgreen';

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product__descr');

//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = 320;
//   imgEl.style.display = 'block';
//   imgEl.classList.add('product__images');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add('product__price');

//   productEl.append(nameEl, descrEl, imgEl, priceEl);

//   return productEl;
// };
// const ProductCard = makeProductCard('OLeh', 'business', 500, images[2]);
// const ListStart = document.querySelector('.site-nav__item');
// ListStart.append(ProductCard);

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');
// let value = 0;
// const onTargetBtnClick = () => (
//   console.log('Клик по целевой кнопке'), (value += 1), console.log(value)
// );
// addListenerBtn.addEventListener('click', () => {
//   console.log('Вешаю слушателя собітий на целевую кнопку');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// });
// removeListenerBtn.addEventListener('click', () => {
//   console.log('Снимаю слушателя с целевой кнопки');
//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// const handleTargetBtnClick = () => console.log('Click');
// const targetBtnClickHandler = () => console.log('Click');
// const LogMessage = () => console.log('Click');

// const decrementBtn = document.querySelector('#counter [data-action="decrement"]');
// const incrementBtn = document.querySelector('#counter [data-action="increment"]');
// const counterEl = document.querySelector('#value');
// let counterValue = 0;

// const decrementClickValue = () => ((counterValue -= 1), (counterEl.textContent = counterValue));
// const incrementClickValue = () => ((counterValue += 1), (counterEl.textContent = counterValue));

// decrementBtn.addEventListener('click', decrementClickValue);
// incrementBtn.addEventListener('click', incrementClickValue);

// const inputText = document.querySelector('#name-input');
// const outputText = document.querySelector('#name-output');
// inputText.addEventListener('input', event => {
//   if (!event.currentTarget.value.trim()) {
//     return;
//   }
//   outputText.textContent = event.currentTarget.value.trim();
// });

// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');
// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });
// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });
// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });
// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });

// const validInput = document.querySelector('#validation-input');
// const verificationInput = event => {
//   if (event.currentTarget.value.trim().length === parseInt(validInput.dataset.length)) {
//     validInput.classList.add('valid');
//     return;
//   }
//   validInput.classList.add('invalid');
// };
// validInput.addEventListener('blur', verificationInput);

// const inputRange = document.querySelector('#font-size-control');
// const rangeText = document.querySelector('#text');
// const selectRange = event => (
//   (rangeText.style.fontSize = event.currentTarget.value + `px`),
//   console.log(event.currentTarget.value + `px`)
// );
// inputRange.addEventListener('input', selectRange);

// const form = document.querySelector('.register-form');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });
// const onFormSubmit = event => (
//   event.preventDefault(), console.log('currentTarget:', event.currentTarget)
// );
// const formSubmit = form.addEventListener('submit', onFormSubmit);

// const loginForm = document.querySelector('.login-form');

// const onLoginEventCurrentTarget = event => {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (!password.value.trim()) {
//     alert('Заповніть всі поля!');
//     return;
//   }
//   console.log(email.value, password.value);
//   event.currentTarget.reset();
// };

// loginForm.addEventListener('submit', onLoginEventCurrentTarget);

// const onLoginFormSubmit = event => {
//   event.preventDefault();
//   const formDataNew = new FormData(event.currentTarget);
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const widgetBtn = document.querySelector('.change-color');
// const BgdColorValueEl = document.querySelector('.color');
// const BtnClick = () => {
//   const value = getRandomHexColor();
//   document.body.style.backgroundColor = value;
//   BgdColorValueEl.textContent = value;
// };

// widgetBtn.addEventListener('click', BtnClick);
