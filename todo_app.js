

function TodoApp() {
    //your code to run since DOM is loaded and ready;
    this.initApp();
}


TodoApp.prototype.initApp = function() {
    this._todosListEl = document.getElementById('todos');
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', this.addTodo.bind(this));
    TodoManager.init();
    this.renderList();

    this._todosListEl.addEventListener('click', this.removeTodo.bind(this));
};


TodoApp.prototype.checker = function () {
    var index = event.target.getAttribute('data-index');
    event.target.parentNode.parentNode.classList.toggle('completed');
    TodoManager.toggleTodo(index);
};


TodoApp.prototype.removeTodo = function (event) {
    if (!event.target.classList.contains('remover')) return;
        var index = event.target.getAttribute('data-index');
        TodoManager.removeTodo(index);
        this.renderList();
};


TodoApp.prototype.renderList = function() {
    // renderTodos(todosFromLocalStorage);
    var todoList = TodoManager.loadTodos();

    var renderedTodosArr = todoList.map(this.renderTodo, this);

    /*var renderedTodosArr = todoList.map(function(todo, index) {
        return this.renderTodo(todo, index);
    }, this);*/

    this._todosListEl.innerHTML = renderedTodosArr.join('');

    this.handlersToCheckboxes();
};


//bind handlers to checkboxes
TodoApp.prototype.handlersToCheckboxes = function() {
    var checkboxesList = this._todosListEl.querySelectorAll('input'); // ?????? ?????????
    checkboxesList.forEach(function (item) {
        item.addEventListener("change", this.checker);
    }, this);
};

//bind handlers to buttons
//TodoApp.prototype.handlersToButtons = function() {
    //this._todosListEl.addEventListener('click', this.removeTodo.bind(this));
    /*    var buttonsList = this._todosListEl.getElementsByClassName('remover');
     for (var i = 0; i < buttonsList.length; i++) {
     buttonsList[i].addEventListener("click", this.removeTodo.bind(this));
     }*/

//};


TodoApp.prototype.addTodo = function() {
    // save todo to LS
    var todoText = document.getElementById('task').value;

    // add todo to list and bind checkbox event
    if (todoText === '') {
        alert('Please write something');
    } else {
        TodoManager.addTodo({
            text: todoText
        });
        var todoList = TodoManager.loadTodos();
        var newTodoIndex = todoList.length -1;
        var todoString = this.renderTodo({text:todoText}, newTodoIndex);

        this._li = document.createElement('li');
        this._li.innerHTML = todoString;
        this._todosListEl.appendChild(this._li);

        this.renderList();

        this.handlersToCheckboxes();
    }
    document.getElementById('task').value = '';
};


TodoApp.prototype.renderTodo = function(todo, index) {
    // uses renderTodo for each todo in list and returns contcatenated string
    return '<li' + (todo.checked ? ' class="completed"' : '')  +
        '><label><input data-index="'+ index + '" type="checkbox" ' +
        (todo.checked ? ' checked' : '') + '>' + todo.text +
        '<button class="remover" data-index="'+ index + '">x</button></label></li>';
};










/*
var todosListEl;
document.addEventListener("DOMContentLoaded", function(event) {
    //your code to run since DOM is loaded and ready
    initApp();
});
function initApp() {
    todosListEl = document.getElementById('todos'); // ?????? ?? ??? ??????? ?????? ???????
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTodo);
    TodoManager.init();
    renderList();
}
function checker(event) {
    var index = event.target.getAttribute('data-index');
    event.target.parentNode.parentNode.classList.toggle('completed');
    TodoManager.toggleTodo(index);
}
function removeTodo(event) {
    var index = event.target.getAttribute('data-index');
    TodoManager.removeTodo(index);
    renderList();
}
function renderList() {
    // renderTodos(todosFromLocalStorage);
    var todoList = TodoManager.loadTodos();
    var renderedTodoList = todoList.map(function(todo, index) {
        return renderTodo(todo, index);
    });
    todosListEl.innerHTML  = renderedTodoList.join('');
    handlersToCheckboxes();
    handlersToButtons();
}
//bind handlers to checkboxes
function handlersToCheckboxes() {
    var checkboxesList = todosListEl.querySelectorAll('input'); // ?????? ?????????
    checkboxesList.forEach(function (item) {
        item.addEventListener("change", checker);
    });
}
//bind handlers to buttons
function handlersToButtons() {
    var buttonslist = todosListEl.getElementsByClassName('remover');
    for (var i = 0; i < buttonslist.length; i++) {
        buttonslist[i].addEventListener("click", removeTodo);
    }
}
function addTodo() {
    // save todo to LS
    var todoText = document.getElementById('task').value;
    // add todo to list and bind checkbox event
    if (todoText === '') {
        alert('Please write something');
    } else {
        TodoManager.addTodo({
            text: todoText
        });
        var todoList = TodoManager.loadTodos();
        var newTodoIndex = todoList.length -1;
        var todoString = renderTodo({text:todoText}, newTodoIndex);
        var li = document.createElement('li');
        li.innerHTML = todoString;
        todosListEl.appendChild(li);
        handlersToCheckboxes();
        handlersToButtons();
    }
    document.getElementById('task').value = '';
}
function renderTodo(todo, index) {
    // uses renderTodo for each todo in list and returns contcatenated string
    return '<li' + (todo.checked ? ' class="completed"' : '')  +
        '><label><input data-index="'+ index + '" type="checkbox" ' +
        (todo.checked ? ' checked' : '') + '>' + todo.text +
        '<button class="remover" data-index="'+ index + '">x</button></label></li>';
}
*/

