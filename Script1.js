/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>водитель</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const allStudentsNode = listNode.querySelectorAll("student");
console.log('allStudentsNode', allStudentsNode);

// Получение данных из атрибутов
const langAttr = nameNode.getAttribute('lang');
// console.log('langAttr', langAttr);

/* Этап 3. Запись данных в результирующий объект */
let result = [];

allStudentsNode.forEach(node => {
  let student = {
    name: `${node.querySelector("first").textContent}\ ${node.querySelector("second").textContent}`,
    age: Number(node.querySelector("age").textContent),
    prof: node.querySelector("prof").textContent,
    lang: node.querySelector("name").getAttribute("lang")
  }
    result.push(student);
  console.log("list:", student);
});