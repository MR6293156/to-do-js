// const inputField = document.querySelector('input[type="text"]');
// const todoList = document.querySelector('.todos');
// let todos = [];

// // Check if todos exist in local storage
// if (localStorage.getItem('todos')) {
//   todos = JSON.parse(localStorage.getItem('todos'));
//   renderTodoList();
// }

// inputField.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter' && inputField.value.trim() !== '') {
//     event.preventDefault();
    
//     const todoText = inputField.value;
//     inputField.value = '';

//     const randomId = Math.floor(Math.random() * 10000);

//     const newTodoItem = {
//       id: randomId,
//       text: todoText,
//       completed: false
//     };

//     todos.push(newTodoItem);
//     localStorage.setItem('todos', JSON.stringify(todos));

//     renderTodoList();
//   }
// });

// function renderTodoList() {
//   todoList.innerHTML = '';

//   for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];

//     const newTodoItem = document.createElement('li');
//     newTodoItem.className = 'card todo-item';

//     const todoContent = `
//       <div class="todo">
//         <input type="checkbox" id="checkbox-${todo.id}" ${todo.completed ? 'checked' : ''}>
//         <label for="checkbox-${todo.id}"></label>
//         <p>${todo.text}</p>
//       </div>
//       <div class="icons"> 
//         <i class="fa fa-pencil" aria-hidden="true"></i>
//         <i class="fa fa-times" aria-hidden="true"></i>
//       </div>
//     `;

//     newTodoItem.innerHTML = todoContent;
//     todoList.appendChild(newTodoItem);
//   }
// }

// todoList.addEventListener('change', function(event) {
//   const checkbox = event.target;
//   const todoId = parseInt(checkbox.id.split('-')[1]);

//   for (let i = 0; i < todos.length; i++) {
//     if (todos[i].id === todoId) {
//       todos[i].completed = !todos[i].completed;
//       break;
//     }
//   }

//   localStorage.setItem('todos', JSON.stringify(todos));
//   renderTodoList();
// });

// todoList.addEventListener('click', function(event) {
//   if (event.target.classList.contains('fa-times')) {
//     const icon = event.target;
//     const todoItem = icon.closest('.todo-item');
//     const todoId = parseInt(todoItem.querySelector('input[type="checkbox"]').id.split('-')[1]);

//     todos = todos.filter(function(todo) {
//       return todo.id !== todoId;
//     });

//     localStorage.setItem('todos', JSON.stringify(todos));
//     renderTodoList();
//   }
// });


// ====================================================================
// const inputField = document.querySelector('input[type="text"]');
// const todoList = document.querySelector('.todos');
// const itemsLeftElement = document.getElementById('items-left');
// const allButton = document.getElementById('all');
// const activeButton = document.getElementById('active');
// const completedButton = document.getElementById('completed');
// const clearCompletedButton = document.getElementById('clear-completed');
// let todos = [];

// // Check if todos exist in local storage
// if (localStorage.getItem('todos')) {
//   todos = JSON.parse(localStorage.getItem('todos'));
//   renderTodoList();
// }

// inputField.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter' && inputField.value.trim() !== '') {
//     event.preventDefault();

//     const todoText = inputField.value;
//     inputField.value = '';

//     const randomId = Math.floor(Math.random() * 10000);

//     const newTodoItem = {
//       id: randomId,
//       text: todoText,
//       completed: false
//     };

//     todos.push(newTodoItem);
//     localStorage.setItem('todos', JSON.stringify(todos));

//     renderTodoList();
//     updateItemsLeft();
//   }
// });

// function renderTodoList(filterType = 'all') {
//   todoList.innerHTML = '';

//   todos.forEach(function(todo) {
//     if (filterType === 'all' || (filterType === 'active' && !todo.completed) || (filterType === 'completed' && todo.completed)) {
//       const newTodoItem = document.createElement('li');
//       newTodoItem.className = 'card todo-item';

//       const todoContent = `
//         <div class="todo">
//           <input type="checkbox" id="checkbox-${todo.id}" ${todo.completed ? 'checked' : ''}>
//           <label for="checkbox-${todo.id}"></label>
//           <p>${todo.text}</p>
//         </div>
//         <div class="icons"> 
//           <i class="fa fa-pencil" aria-hidden="true"></i>
//           <i class="fa fa-times" aria-hidden="true"></i>
//         </div>
//       `;

//       newTodoItem.innerHTML = todoContent;
//       todoList.appendChild(newTodoItem);
//     }
//   });
// }

// function updateItemsLeft() {
//   const itemsLeft = todos.filter(function(todo) {
//     return !todo.completed;
//   }).length;
  
//   itemsLeftElement.textContent = itemsLeft;
// }

// function filterTodoList(filterType) {
//   allButton.classList.remove('active');
//   activeButton.classList.remove('active');
//   completedButton.classList.remove('active');

//   if (filterType === 'all') {
//     allButton.classList.add('active');
//   } else if (filterType === 'active') {
//     activeButton.classList.add('active');
//   } else if (filterType === 'completed') {
//     completedButton.classList.add('active');
//   }

//   renderTodoList(filterType);
// }

// function clearCompletedTodos() {
//   todos = todos.filter(function(todo) {
//     return !todo.completed;
//   });

//   localStorage.setItem('todos', JSON.stringify(todos));
//   renderTodoList();
//   updateItemsLeft();
// }

// allButton.addEventListener('click', function() {
//   filterTodoList('all');
// });

// activeButton.addEventListener('click', function() {
//   filterTodoList('active');
// });

// completedButton.addEventListener('click', function() {
//   filterTodoList('completed');
// });

// clearCompletedButton.addEventListener('click', function() {
//   clearCompletedTodos();
// });

// renderTodoList();
// updateItemsLeft();


// ==================================================================== final =================================================================
const inputField = document.querySelector('input[type="text"]');
const todoList = document.querySelector(".todos");
const addBtn = document.querySelector("#add-btn");
const itemsLeftElement = document.querySelector("#items-left");
const allBtn = document.querySelector("#all");
const activeBtn = document.querySelector("#active");
const completedBtn = document.querySelector("#completed");
const clearBtn = document.querySelector("#clear");
let todos = [];

// Check if todos exist in local storage
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  renderTodoList();
}

const addTodoItem = () => {
  if (inputField.value.trim() !== "") {
    const todoText = inputField.value;
    inputField.value = "";

    const todoItemId = Math.floor(Math.random() * 10000);

    const newTodoItem = {
      id: todoItemId,
      text: todoText,
      isComplete: false,
    };

    todos.push(newTodoItem);
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodoList();
    updateItemsLeft();
  }
};

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodoItem();
  }
});

addBtn.addEventListener("click", () => {
  addTodoItem();
});

function renderTodoList  (filter = "all") {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    if (
      filter === "all" ||
      (filter === "active" && todo.isComplete) ||
      (filter === "complete" && todo.isComplete)
    ) {
      const newTodoItem = document.createElement("li");
      // newTodoItem.classList.add('card', 'todo-item');
      newTodoItem.className = "card todo-item";

      const todoContent = `
          <div class="todo">
            <input type="checkbox" id="checkbox-${todo.id}" ${
        todo.isComplete ? "checked" : ""
      }>
            <label for="checkbox-${todo.id}"></label>
            <p>${todo.text}</p>
          </div>
          <div class="icons"> 
            <i class="fa fa-pencil" aria-hidden="true"></i>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        `;

      newTodoItem.innerHTML = todoContent;
      todoList.appendChild(newTodoItem);
    }
  });
};

const toggleTodoCompletion = (todoId) => {
  todos = todos.map((todo) => {
    if (todo.id === todoId) {
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
  updateItemsLeft();
};

todoList.addEventListener("click", (event) => {
  const checkbox = event.target;
  const todoId = parseInt(checkbox.id.split("-")[1]);
  toggleTodoCompletion(todoId);
});

const editTodo = (todoId, updatedTodoText) => {
  todos = todos.map((todo) => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        text: updatedTodoText,
        isComplete: todo.isComplete,
      };
    }
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
};

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-pencil")) {
    const icon = event.target;
    const todoItem = icon.closest(".todo-item");
    const todoId = parseInt(
      todoItem.querySelector('input[type="checkbox"]').id.split("-")[1]);
    const todoText = todoItem.querySelector("p").textContent;
    const newText = prompt("Edit the Todo Item", todoText);

    if (newText !== null && newText !== "") {
      editTodo(todoId, newText);
    }
  }
});

const deleteTodo = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
};

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-times")) {
    const icon = event.target;
    const todoItem = icon.closest(".todo-item");
    const todoId = parseInt(
      todoItem.querySelector('input[type="checkbox"]')
    ).id.split("-")[1];
    deleteTodo(todoId);
  }
});

const filterTodoList = (filterType) => {
  allBtn.classList.remove("active");
  activeBtn.classList.remove("active");
  completedBtn.classList.remove("active");

  if (filterType === "all") {
    allBtn.classList.add("active");
  } else if (filterType === "active") {
    activeBtn.classList.add("active");
  } else if (filterType === "completed") {
    completedBtn.classList.add("active");
  }
  renderTodoList(filterType);
};

const updateItemsLeft = () => {
  const incompleteItems = todos.filter((todo) => !todo.isComplete);
  itemsLeftElement.textContent = incompleteItems.length;
};

allBtn.addEventListener("click", () => {
  filterTodoList("all");
});

activeBtn.addEventListener("click", () => {
  filterTodoList("active");
});

completedBtn.addEventListener("click", () => {
  filterTodoList("completed");
});

clearBtn.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.isComplete);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodoList();
  updateItemsLeft();
});

renderTodoList();
updateItemsLeft();



// ====================================================================
