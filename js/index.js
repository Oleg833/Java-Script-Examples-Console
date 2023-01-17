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
console.log('Good');
