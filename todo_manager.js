var TodoManager = {
    _key: 'todos',
    _collection: null,

    init: function () {
        this.loadTodos();
    },

    loadTodos: function () {
        this._collection = JSON.parse(localStorage.getItem(this._key)) || [];
        return this._collection;
    },

    addTodo: function (item) {
        this._collection.push(item);
        this._save();
    },

    removeTodo: function (todoIndex) {
        this._collection.splice(todoIndex, 1);
        this._save();
    },

    toggleTodo: function (todoIndex) {
        var todo = this._collection[todoIndex];
        todo.checked = !todo.checked;
        this._save();
    },

    _save: function (collection) {
        localStorage.setItem(this._key, JSON.stringify(this._collection));
    }
};





