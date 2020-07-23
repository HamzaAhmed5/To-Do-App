var list = document.getElementById("List");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li')
    var liText = document.createTextNode("Hamza")
    li.appendChild(liText)

    console.log(li)
}