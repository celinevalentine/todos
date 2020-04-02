let todoForm = document.querySelector('#add-todo');
let todoList = document.querySelector('#todos');

//retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement('li');
    newTodo.innerText = savedTodo[i].addText;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
}
//submit and reset todo
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let removeBtn = document.createElement('button');
    removeBtn.innerText = "Delete";

    let newTodo = document.createElement('li');
    newTodo.innerText = document.querySelector('#addText').value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeBtn);

    todoForm.reset();
});

//style completed todo and delete 
todoList.addEventListener('click', function(e) {
    const targetTagToLowerCase = e.target.tagName.toLowerCase();
    if (targetTagToLowerCase === 'li') {
        e.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === 'button') {
        e.target.parentNode.remove();
    }
});

//save to localStorage
savedTodos.push({ addText: newTodo.innerText, isCompleted: false });
localStorage.setItem('todos', JSON.stringify(saveTodos));