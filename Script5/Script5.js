const pageNumberInput = document.getElementById('page-number');
const limitInput = document.getElementById('limit');
const requestButton = document.getElementById('request-button');
const resultDiv = document.getElementById('result');

requestButton.addEventListener('click', () => {
  const pageNumber = pageNumberInput.value;
  const limit = limitInput.value;
  let errorMessage = '';

  if (!(1 <= pageNumber && pageNumber <= 10) || isNaN(pageNumber)) {
    errorMessage += 'номер страницы вне диапазона от 1 до 10';
  }
  if (!(1 <= limit && limit <= 10) || isNaN(limit)) {
    if (errorMessage) {
      errorMessage += ' и ';
    }
    errorMessage += 'лимит вне диапазона от 1 до 10';
  }

  if (errorMessage) {
    resultDiv.innerHTML = errorMessage;
  } else {
    const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
   
    fetch(url)
      .then(response => response.json())
      .then(data => {
       
        localStorage.setItem('data', JSON.stringify(data));
      
        resultDiv.innerHTML = data.map(item => `<img style="margin: 10px" width="300" height="200"  src="${item.download_url}">`).join('');
      })
      .catch(error => {
        console.error(error);
      });
  }
});

const data = localStorage.getItem('data');
if (data) {
  resultDiv.innerHTML = JSON.parse(data).map(item => `<img style="margin: 10px" width="300" height="200"  src="${item.download_url}">`).join('');
}




