let todos = {"Main": [{"title": "Hello World", 
    "desc": "First Note! Let me know what you think",
    "due": "09/17/2001",
    "priority": "High",
    "id": crypto.randomUUID(),
}]};

function addKey(key) {
    todos[key] = [];
}

function getTodos(key) {
    return todos[key];
}

function addNewToDo(key, obj) {
    todos[key].push(obj)
    console.log(todos);
}

function getKeys() {
    return Object.keys(todos);
}

function deleteToDo(key, id) {
    const index = todos[key].findIndex(el => el.id === id);
    if (index !== -1) {
        todos[key].splice(index, 1)
    }
}

export { todos, addKey, getTodos, getKeys, addNewToDo, deleteToDo};