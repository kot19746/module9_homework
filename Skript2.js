/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
//console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);

/* Этап 3. Запись данных в результирующий объект */
const list = data.list.map(item => ({
    name: item.name,
  age: Number(item.age),
  prof: item.prof
}));

console.log({list});