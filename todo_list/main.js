const userInput = document.querySelector('#addNewInput');
const addBtn = document.querySelector('#addNewBtn');
const listContainer = document.querySelector('#list');
const clearBtn = document.querySelector('#clearBtn');
const taskCounter = document.querySelector('#count');
let count = 0;

function createNewTask(taskText) {
  let div = document.createElement('div');
  div.className = 'listItem';
  div.innerHTML = `<p>${taskText}</p>
  <button class="deleteBtn"><i class="ri-close-line"></i></button>`;

  listContainer.appendChild(div);

  const deleteBtn = div.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', deleteTask);
}

function deleteTask() {
  const listItem = this.parentNode;
  listItem.remove();
  count++;
  taskCounter.textContent = count;
}

addBtn.addEventListener('click', (e) => {
  if (userInput.value.trim() !== '') {
    createNewTask(userInput.value.trim());
    resetUserInput();
  }
});

function resetUserInput() {
  userInput.value = '';
}

function clearAllTask() {
  const tasks = document.querySelectorAll('.listItem');
  tasks.forEach((e) => {
    e.remove();
  });
  taskCounter.textContent = 0;
}

clearBtn.addEventListener('click', clearAllTask);

console.log(taskCounter);
