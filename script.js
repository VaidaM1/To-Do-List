console.log("test")

// 
var todos = [
    {
        name: "task1",
        description: "descriptionTask1"
    },
    {
        name: "task2",
        description: "descriptionTask2"
    },
    {
        name: "task3",
        description: "descriptionTask3"
    }
];

updateHtmlTable();

function updateHtmlTable() {
    // foreach todoList
    // generate <tr> <td> task1 </td> <td> description2 </td> </tr> 
    // merge generate table html
    let generatedHtml = "";
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        let tableRow = `<tr><td>${todo.name}</td><td>${todo.description}</td></tr>`
        //let tableRow = "<tr><td>" + todo.name + "</td><td>" + todo.description + "</td></tr>"
        generatedHtml = generatedHtml + tableRow;
    }
    // get table html element
    // get tbody of that (table)
    // modify tbody.innerHtml into our newly generated one

    let bodyElement = document.getElementById("tasks-table");
    
    bodyElement.innerHTML = generatedHtml;  
}

function addNewTodo() {
    // get name from html document variable in form
    let nameValue = document.getElementById("todo-name").value;
    // get description from document variable
    let description = document.getElementById("todo-description").value;
    // creat todo object with receivred name and description
    var todo = {
        name: nameValue,
        description: description
    }
    // add new todos to todoslist
    todos.push(todo);
    // call updateHtmlTable function
    updateHtmlTable();
}

