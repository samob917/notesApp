let todos = {"main": [{"title": "Hello World", 
    "desc": "First Note! Let me know what you think",
    "due": "09/17/2001",
    "priority": "High",
}]};

function addKey(key) {
    todos[key] = [];
}

function getTodos(key) {
    return todos[key];
}

export { todos, addKey, getTodos};