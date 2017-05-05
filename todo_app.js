

    document.addEventListener("DOMContentLoaded", function(event) {
        //your code to run since DOM is loaded and ready
        initApp();
    });


    function initApp() {
        TodoManager.init();
        renderList(); //render list, add it on the page
    }


    function checker(event) {
        if (event.target.checked) {
            event.target.parentNode.style.textDecoration = 'line-through';
        } else {
            event.target.parentNode.style.textDecoration = 'none';
        }
    }

    function renderList() {
        // renderTodos(todosFromLocalStorage);
        var todoList = TodoManager.loadTodos();

        var renderedTodoList = todoList.map(function(todo) {
            return renderTodo(todo);
        });

        document.getElementById('todos').innerHTML = renderedTodoList;

        //bind handlers to checkboxes
        var checkboxesList = document.body.querySelectorAll('label > input');

        checkboxesList.forEach(function (item) {
            item.addEventListener("change", checker);
        });
    }


    function addTodo() {
        // save todo to LS
        var todoText = document.getElementById('task').value;

        // add todo to list and bind checkbox event
        if (todoText) { //check, if todos text isn't empty

            TodoManager.addTodo({ //if isn't empty, add todo in todoManager
                text: todoText
            });

            var todoString = renderTodo(todoText);

            var li = document.createElement('li');
            li.innerHTML = todoString;

            li.querySelector('input').addEventListener('change', checker);

            document.body.querySelector('ul').appendChild(li);
        }
    }

    function toggleTodo(event) {
        // here you change state of todo and save changes to LS
        /*        var lsTodosArr = [];
         var lsTodos = TodoManager.loadTodos();
         lsTodosArr.push(lsTodos);
         for (var i = 0; i < lsTodosArr.length; i++) {
         var index = lsTodosArr.indexOf(lsTodosArr[i].checked)
         }*/
    }


    function renderTodo(todo) {
        // uses renderTodo for each todo in list and returns contcatenated string
        return '<li><label><input type="checkbox">' + todo.text + '</label></li>'
    }

    initApp();







