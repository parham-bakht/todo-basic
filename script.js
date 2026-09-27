const input = document.querySelector("#task-input")
const addButton = document.querySelector("#add-btn")
const list = document.querySelector("#task-list")
addButton.addEventListener("click", function(){

    let task = input.value;
    if (task==""){
        alert("Task Can Not Be Empty")
    }
    else{

    console.log(task)
    const li = document.createElement("li")
    li.textContent = task
    // create a new button 
    const deleteButton = document.createElement("button")

    //  textContent = Delete
    deleteButton.textContent = "Delete"
    // add it to the li
    deleteButton.addEventListener("click",function(){li.remove()})
    li.appendChild(deleteButton)

    list.appendChild(li)
    input.value = ""

    }
})