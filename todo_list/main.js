const userInput = document.querySelector('#addNewInput');
const addBtn = document.querySelector('#addNew');
const listContainer = document.querySelector('#list');

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
