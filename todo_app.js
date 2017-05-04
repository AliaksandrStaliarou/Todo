
localStorage.clear();

    document.addEventListener("DOMContentLoaded", function(event) {
        //your code to run since DOM is loaded and ready
        initApp();
    });


    function initApp() {
        TodoManager.init(); //TodoManager initialization
        var list = TodoManager.loadTodos(); //get list of todos from TodoMmanager
        renderList(list); //render list, add it on the page

        //bind handlers to checkboxes
        var checkboxesList = document.body.querySelectorAll('label > input');

        checkboxesList.forEach(function (item) {
            item.addEventListener("change", checker);
        });
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
        //get list of todos
        var lsTodos = TodoManager.loadTodos();

        //render it
        var htmlTodos;
        for (var i = 0; i < lsTodos.length; i++) {
            htmlTodos += '<li><label><input type="checkbox">' + lsTodos[i] + '</label></li>';
        }

        //insert
        document.getElementById('todos').innerHTML = htmlTodos;
    }


    function addTodo() {
        // save todo to LS
        var todoText = document.getElementById('task').value;

        // add todo to list and bind checkbox event
        if (todoText) { //check, if todos text isn't empty

            TodoManager.addTodo({ //if isn't empty, add todo in todoManager
                text: todoText
            });

            var todoString = renderTodo();

            var li = document.createElement('li');
            li.innerHTML = todoString;
            var li =
            li.querySelector('input').addEventListener('change', checker);

            document.body.querySelector('ul').appendChild(li); //add it on the page

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

    //renderList();
/*    renderTodo({
        text: todoText
    });*/






