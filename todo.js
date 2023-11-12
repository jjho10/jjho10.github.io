// Todo
const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todoArr = [];

function loadTodo(){
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if(savedTodos){
        const parsedTodos = JSON.parse(savedTodos);
        todoArr = parsedTodos;
        parsedTodos.forEach(paintTodo);
    } 
}

function paintTodo(todoObj){
    newTodo = todoObj.text;
    idTodo = todoObj.id;
    const li = document.createElement("li");
    li.id = idTodo;
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click",delTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const todoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todoArr.push(todoObj);
    saveTodoArr();
    paintTodo(todoObj);
}

function saveTodoArr(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todoArr));
}

function filterTodo(item,idDel){
    return item.id.toString() !== idDel;
}

function delTodo(event){
    li = event.target.parentElement;
    idDel = li.id;
    todoArr = todoArr.filter((item)=>filterTodo(item,idDel));
    saveTodoArr();
    li.remove();
}

todoForm.addEventListener("submit", handleTodoSubmit);
loadTodo();