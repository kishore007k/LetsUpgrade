// Declarations
const todoInput = document.querySelector('.todo-input');
const plusBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
// edit complete & delete btns
// const editBtn = document.querySelector('.edit-btn');

// Events
document.addEventListener('DOMContentLoaded', displayTodos);
plusBtn.addEventListener('click', addTag);
todoList.addEventListener('click', buttonCheck);

// Functions
function addTag(e) {
  e.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const todoLi = document.createElement('li');
  todoLi.classList.add('todo-item');
  todoLi.innerText = todoInput.value;
  todoDiv.appendChild(todoLi);
  saveLocalTodos(todoInput.value);
  // const editBtn = document.createElement('button');
  // editBtn.classList.add('edit-btn');
  // editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
  // todoDiv.appendChild(editBtn);
  const completedBtn = document.createElement('button');
  completedBtn.classList.add('complete-btn');
  completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completedBtn);
  const trashBtn = document.createElement('button');
  trashBtn.classList.add('trash-btn');
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashBtn);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function saveLocalTodos(todo) {
  let todos;

  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function displayTodos() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // const editBtn = document.createElement('button');
    // editBtn.classList.add('edit-btn');
    // editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    // todoDiv.appendChild(editBtn);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
  });
}

function buttonCheck(e) {
  const item = e.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('delete');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  if (item.classList[0] === 'edit-btn') {
    const todo = item.parentElement;
    let child = todo.children[0];
    console.log(child);
    editLocalTodos(todo);
  }
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function editLocalTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  let todoItemValue = todo.children[0];
  todoInput.value = todoItemValue.innerText;
  console.log(todoInput.value);
  console.log(todoItemValue);
}