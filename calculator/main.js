let buttons = document.querySelectorAll('.btn');
let resultString = '';
let result = document.querySelector('#result');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    result.style.color = 'black';

    if (e.target.id == 'clear') {
      resultString = '';
      result.innerHTML = '';
      return;
    }
    if (e.target.innerHTML === 'X') {
      resultString += '*';
      result.innerHTML = resultString;
    } else if (e.target.innerHTML === '=') {
      try {
        let answer = eval(resultString);
        answer = answer.toFixed(2);
        resultString = answer;
        result.innerHTML = answer;
      } catch {
        let errorText = document.createElement('p');
        errorText.innerHTML = 'ERROR';
        console.log(errorText);
        result.style.color = 'red';
        result.textContent = errorText.innerText;
        resultString = '';
      }
    } else if (resultString.length > 9) {
      return;
    } else {
      resultString += e.target.innerHTML;
      result.innerHTML = resultString;
    }
    console.log(resultString);
  });
});
