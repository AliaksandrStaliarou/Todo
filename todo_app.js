

function TodoApp() {
    //your code to run since DOM is loaded and ready
    document.addEventListener("DOMContentLoaded", TodoApp.prototype = function (event) {
        var todoApp = new TodoApp();
    });
}


TodoApp.prototype.initApp = function() {
    this._todosListEl = document.getElementById('todos'); // ссылка на дом элемент списка тудушек
    TodoManager.init();
    this.renderList();
};


TodoApp.prototype.checker = function (event) {
    this._index = event.target.getAttribute('data-index');
    event.target.parentNode.parentNode.classList.toggle('completed');
    TodoManager.toggleTodo(index);
};


TodoApp.prototype.removeTodo = function (event) {
    this._index = event.target.getAttribute('data-index');
    TodoManager.removeTodo(index);
    this.renderList();
};


TodoApp.prototype.renderList = function() {
    // renderTodos(todosFromLocalStorage);
    this._todoList = TodoManager.loadTodos();
    this._renderedTodoList = this._todoList.map(function(todo, index) {
        return this.renderTodo(todo, index);
    });

    this._todosListEl.innerHTML  = this._renderedTodoList.join('');

    this.handlersToCheckboxes();
    this.handlersToButtons();
};


//bind handlers to checkboxes
TodoApp.prototype.handlersToCheckboxes = function() {
    this._checkboxesList = this._todosListEl.querySelectorAll('input'); // список чекбоксов
    this._checkboxesList.forEach(function (item) {
        item.addEventListener("change", this.checker);
    });
};

//bind handlers to buttons
TodoApp.prototype.handlersToButtons = function() {
    this._buttonslist = this._todosListEl.getElementsByClassName('remover');
    for (this._i = 0; this._i < this._buttonslist.length; this._i++) {
        this._buttonslist[this._i].addEventListener("click", this.removeTodo);
    }
};


TodoApp.prototype.addTodo = function() {
    // save todo to LS
    this._todoText = document.getElementById('task').value;

    // add todo to list and bind checkbox event
    if (this._todoText === '') {
        alert('Please write something');
    } else {
        TodoManager.addTodo({
            text: this._todoText
        });
        this._todoString = this.renderTodo({text:todoText});
        this._li = document.createElement('li');
        this._li.innerHTML = todoString;
        this._todosListEl.appendChild(this._li);
        this.handlersToCheckboxes();
        this.handlersToButtons();
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

var todoApp = new TodoApp();





/*
    var todosListEl;

    //document.addEventListener("DOMContentLoaded", function(event) {
        //your code to run since DOM is loaded and ready
        initApp();
    //});


    function initApp() {
        todosListEl = document.getElementById('todos'); // ссылка на дом элемент списка тудушек
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
        var checkboxesList = todosListEl.querySelectorAll('input'); // список чекбоксов
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
            var todoString = renderTodo({text:todoText});
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













