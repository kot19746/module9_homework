const btn = document.querySelector('.btn');
const result = document.querySelector('.image');

btn.addEventListener('click', () => {

let num1 = document.querySelector('input[name=input1]').value;
let num2 = document.querySelector('input[name=input2]').value;

if (num1 >= 100 && num1 <= 300 && num2 >= 100 && num2 <= 300){
    fetch(`https://picsum.photos/${num1}/${num2}`)
    .then((response) => {
    result.innerHTML = `<img src="${response.url}">`
})
    .catch((error) => { console.log('error') })
} else {
    alert('одно из чисел вне диапазона от 100 до 300')
    }
});