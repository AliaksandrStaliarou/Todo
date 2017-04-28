


    function renderList() {
        // renderTodos(todosFromLocalStorage);
        var lsTodos = TodoManager.loadTodos();

        var htmlTodos;
        for (var i = 0; i < lsTodos.length; i++) {
            htmlTodos += '<li><label><input type="checkbox">' + lsTodos[i] + '</label></li>';
        }

        document.getElementById('todos').innerHTML = htmlTodos;
    }


    function initApp() {

        TodoManager.init();

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


    function addTodo() {
        // save todo to LS
        var todoText = document.getElementById('task').value;

        TodoManager.addTodo({
            text: todoText
        });

        // add todo to list and bind checkbox event
        if (todoText) {
            var todoString = '<label>' + '<input type="checkbox">' + todoText + '</label>';
            var li = document.createElement('li');
            li.innerHTML = todoString;

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

    function renderTodo(todoObject) {
        // return string: <li><input type="checkbox" checked or
        // unckecked if todoObject.checked is true> todo text</li>
    }

    function renderTodos(todosList) {
        // uses renderTodo for each todo in list and returns contcatenated string
    }




