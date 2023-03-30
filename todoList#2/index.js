// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

// Event Listeners
todoButton.addEventListener("click",addTodo);

todoList.addEventListener("click", deleteCheck);

filterOption.addEventListener("click", filterTodo);




// Functions


function addTodo(event) {
    // event.preventDefault() stops page submitting/refreshing
    event.preventDefault()

//  todoDiv
const todoDiv = document.createElement("div")
todoDiv.classList.add("todo")

// Create li
const newTodo = document.createElement("li")
//ADD INPUT VALUE to ToDo input
newTodo.innerText = todoInput.value
newTodo.classList.add("todo-item")
todoDiv.appendChild(newTodo)


// Create checkmark button
const completedButton = document.createElement("button")
completedButton.innerHTML = '<i class="fas fa-check"></i>'
completedButton.classList.add("complete-button")
todoDiv.appendChild(completedButton)

// Create TRASH button
const trashButton = document.createElement("button")
trashButton.innerHTML = '<i class="fas fa-trash"></i>'
trashButton.classList.add("trash-button")
todoDiv.appendChild(trashButton)

// Append to list
todoList.appendChild(todoDiv)

//clear Todo INPUT VALUE
todoInput.value = ""
}


function deleteCheck(e) {
   const item = e.target;

   //Delete TODO
   
   if(item.classList[0] === "trash-button"){
    const todo = item.parentElement
    // Animation
    todo.classList.add("fall")
    todo.addEventListener("transitionend", function(){
         todo.remove()        
    })
   }
   
    //Checkmark TODO
    if(item.classList[0]==="complete-button"){
    const todo = item.parentElement
    todo.classList.toggle("completed")
    }

}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
        case "all":
                todo.style.display="flex"
                break;
        case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else {
                    todo.style.display = "none";
                }
                break;
        case "incomplete":
                if(!todo.classList.contains("completed")){
                    todo.style.display ="flex";
                }else {
                    todo.style.display ="none"
                }
                break;
        }
    });
}

