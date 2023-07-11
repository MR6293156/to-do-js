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
if (localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
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

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && inputField.value.trim() !== '') {
    addTodoItem()
  }
});

addBtn.addEventListener("click", () => {
  addTodoItem();
});

function renderTodoList() {
  todoList.innerHTML = '';
  
  todos.forEach((todo) => {
    const newTodoItem = document.createElement('li');
    newTodoItem.className = 'card todo-item';
    
    const todoContent = `
      <div class="todo">
        <input type="checkbox" id="checkbox-${todo.id}" ${todo.isComplete ? 'checked' : ''}>
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
  });
}

const toggleTodoCompletion = todoId => {
    todos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodoList();
    updateItemsLeft()
  };

  todoList.addEventListener('change', event => {
    const checkbox = event.target;
    const todoId = parseInt(checkbox.id.split('-')[1]);
    toggleTodoCompletion(todoId);
  });

  const editTodo = (todoId, updatedTodoText) => {
    todos = todos.map((todo) => {
      if (todo.id === todoId) {
        console.log(todo)
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
  
  const deleteTodo = todoId => {
    todos = todos.filter(todo => todo.id !== todoId);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodoList();
  };  
  
  todoList.addEventListener('click', event => {
    if (event.target.classList.contains('fa-times')) {
      const icon = event.target;
      const todoItem = icon.closest('.todo-item');
      const todoId = parseInt(todoItem.querySelector('input[type="checkbox"]').id.split('-')[1]);
      deleteTodo(todoId);
    }
  });


const updateItemsLeft = () => {
  const incompleteItems = todos.filter((todo) => !todo.isComplete);
  itemsLeftElement.textContent = incompleteItems.length;
};
  
  function filterTodoList(filterType) {
    let filteredTodos = [];
  
    switch (filterType) {
      case 'all':
        filteredTodos = todos;
        break;
      case 'active':
        filteredTodos = todos.filter(function(todo) {
          return !todo.isComplete;
        });
        break;
      case 'completed':
        filteredTodos = todos.filter(function(todo) {
          return todo.isComplete;
        });
        break;
    }
  
    renderFilteredTodoList(filteredTodos);
  }

  function renderFilteredTodoList(filteredTodos) {
    todoList.innerHTML = '';
  
    filteredTodos.forEach(function(todo) {
      const newTodoItem = document.createElement('li');
      newTodoItem.className = 'card todo-item';
  
      const todoContent = `
        <div class="todo">
          <input type="checkbox" id="checkbox-${todo.id}" ${todo.isComplete ? 'checked' : ''}>
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
    });
  }
  
  function clearCompletedTodos() {
    todos = todos.filter((todo) => !todo.isComplete);
  
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodoList();
    updateItemsLeft();
  }
  
  allBtn.addEventListener('click', () => {
    allBtn.classList.add('active');
    activeBtn.classList.remove('active');
    completedBtn.classList.remove('active');
    filterTodoList('all');
  });
  
  activeBtn.addEventListener('click', () => {
    allBtn.classList.remove('active');
    activeBtn.classList.add('active');
    completedBtn.classList.remove('active');
    filterTodoList('active');
  });
  
  completedBtn.addEventListener('click', () => {
    allBtn.classList.remove('active');
    activeBtn.classList.remove('active');
    completedBtn.classList.add('active');
    filterTodoList('completed');
  });
  
  clearBtn.addEventListener('click', () => {
    clearCompletedTodos();
  });
  
  renderTodoList();
  updateItemsLeft();
