
    var todosListEl;

    document.addEventListener("DOMContentLoaded", function(event) {
        //your code to run since DOM is loaded and ready
        initApp();
    });


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

        todosListEl.innerHTML = renderedTodoList.join('');

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












