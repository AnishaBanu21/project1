const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
      <button class="done" title="Mark as done">✅</button>
      <button class="delete" title="Delete task">🗑️</button>
    </div>gg
  `;

  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('li').remove();
  } else if (e.target.classList.contains('done')) {
    e.target.closest('li').classList.toggle('completed');
  }
});
