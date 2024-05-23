// "use strict";

// Задание 1

// const musicCollection = {
//   musicAlbums: [
//     { title: "Dreaming", artist: "Way 8", year: "2023" },
//     { title: "Horizons", artist: "Way 8", year: "2024" },
//     { title: "Borealis", artist: "Way 8", year: "2024" },
//   ],
//   [Symbol.iterator]() {
//     this.index = 0;
//     return this;
//   },
//   next() {
//     return this.index < this.musicAlbums.length
//       ? { done: false, value: this.musicAlbums[this.index++] }
//       : { done: true };
//   },
// };
// for (const album of musicCollection) {
//   console.log(`${album.title} - ${album.artist} (${album.year})`);
// }

// Задание 2

// let cooks = new Map();
// cooks.set("Виктор", "Пицца").set("Ольга", "Суши").set("Дмитрий", "Десерты");

// console.log(`Виктор - специализация: ${cooks.get("Виктор")}`);
// console.log(`Ольга - специализация: ${cooks.get("Ольга")}`);
// console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`);
// console.log();

// let dishes = new Map();
// dishes
//   .set("Пицца 'Маргарита'", "Виктор")
//   .set("Пицца 'Пепперони'", "Виктор")
//   .set("Суши 'Филадельфия'", "Ольга")
//   .set("Суши 'Калифорния'", "Ольга")
//   .set("Тирамису", "Дмитрий")
//   .set("Чизкейк", "Дмитрий");

// console.log(
//   `Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`
// );
// console.log(
//   `Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`
// );
// console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`);
// console.log();

// let orders = new Map();

// let client1 = { name: "Алексей" };
// let clientOrder1 = new Set();
// clientOrder1.add("Пицца 'Пепперони'").add("Тирамису");

// let client2 = { name: "Мария" };
// let clientOrder2 = new Set();
// clientOrder2.add("Суши 'Калифорния'").add("Пицца 'Маргарита'");

// let client3 = { name: "Ирина" };
// let clientOrder3 = new Set();
// clientOrder3.add("Чизкейк");

// orders
//   .set(client1, clientOrder1)
//   .set(client2, clientOrder2)
//   .set(client3, clientOrder3);

// console.log(`Клиент ${client1.name} заказал(а): ${[...orders.get(client1)]}`);
// console.log(`Клиент ${client2.name} заказал(а): ${[...orders.get(client2)]}`);
// console.log(`Клиент ${client3.name} заказал(а): ${[...orders.get(client3)]}`);
