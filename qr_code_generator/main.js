const userInput = document.querySelector('#userInput');
const imgBox = document.querySelector('#imgBox');
const qrCode = document.querySelector('#qrCode');
const generateBtn = document.querySelector('#generateBtn');
const error = document.querySelector('#error');
const codeValueElement = document.querySelector('#codeValueElement');
const codeValue = document.querySelector('#codeValue');

error.classList.add('hidden');
generateBtn.addEventListener('click', (e) => {
  if (userInput.value.length > 0) {
    userInput.style.borderColor = 'black';
    error.classList.add('hidden');
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`;
    imgBox.style.maxHeight = '150px';
    codeValue.innerHTML = `${userInput.value}`;
    userInput.value = '';
    codeValueElement.classList.remove('hidden');
  } else {
    userInput.style.borderColor = 'red';
    error.classList.remove('hidden');
  }
});
