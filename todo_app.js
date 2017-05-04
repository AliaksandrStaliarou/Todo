

    document.addEventListener("DOMContentLoaded", function(event) {
        //your code to run since DOM is loaded and ready
        initApp();
    });


    function initApp() {
        TodoManager.init(); //инициализирует туду манагер
        var list = TodoManager.loadTodos(); //получает список тудушек из манагера
        renderList(list); //рендерит список, добавляет его на страницу

        //bind handlers to checkboxes
        var checkboxesList = document.body.querySelectorAll('label > input');

        checkboxesList.forEach(function (item) {
            item.addEventListener("change", checker);
        });

        function checker(event) {
            if (event.target.checked) {
                event.target.parentNode.style.textDecoration = 'line-through';
            } else {
                event.target.parentNode.style.textDecoration = 'none';
            }
        }
    }

    function renderList() {
        // renderTodos(todosFromLocalStorage);
        //получил список тудушек
        var lsTodos = TodoManager.loadTodos();

        //отрендерил
        var htmlTodos;
        for (var i = 0; i < lsTodos.length; i++) {
            htmlTodos += '<li><label><input type="checkbox">' + lsTodos[i] + '</label></li>';
        }

        //вставил
        document.getElementById('todos').innerHTML = htmlTodos;
    }


    function addTodo() {
        // save todo to LS
        var todoText = document.getElementById('task').value;

        // add todo to list and bind checkbox event
        if (todoText) { //проверяет, не пустой ли текст у тудушки

            TodoManager.addTodo({ //если не пустой, то добавляет тудушку в todoManager
                text: todoText
            });

            var todoString = '<label>' + '<input type="checkbox">' + todoText + '</label>'; //рендерит тудушку

            var li = document.createElement('li');
            li.innerHTML = todoString;

            document.body.querySelector('ul').appendChild(li); //добавляет её на страницу
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

    function renderTodos(list) {
        // return string: <li><input type="checkbox" checked or
        // unckecked if todoObject.checked is true> todo text</li>
        var lsTodos = [];
        lsTodos = TodoManager.loadTodos();
        lsTodos.map(function(todo) {
            return renderTodo(todo);
        })
    }

    function renderTodo(todo) {
        // uses renderTodo for each todo in list and returns contcatenated string
        return '<li><label><input type="checkbox">' + todo.text + '</label></li>'
    }

    renderList();
/*    renderTodo({
        text: todoText
    });*/






