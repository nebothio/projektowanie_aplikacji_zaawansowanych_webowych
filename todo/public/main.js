"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        arrayOfTodos.push({ id: arrayOfTodos.length, title: inputTextField?.value });
        inputTextField.value = '';
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card-body", "border", "rounded", "p-2", "shadow");
        let button = document.createElement("button");
        button.classList.add("btn", "btn-danger", "w-100", "p-3");
        button.textContent = "Delete";
        button.addEventListener('click', (e) => {
            todosContainer.removeChild(container);
            arrayOfTodos.splice(arrayOfTodos.indexOf(element), 1);
        });
        let select = document.createElement("select");
        select.classList.add("w-100");
        let option1 = document.createElement("option");
        option1.value = "done";
        option1.textContent = "Done";
        let option2 = document.createElement("option");
        option2.value = "notDone";
        option2.textContent = "Not Done";
        select.appendChild(option1);
        select.appendChild(option2);
        let status = document.createElement("p");
        status.textContent = "Status: Not Done";
        select.addEventListener('change', (e) => {
            if (select.value === "done") {
                status.textContent = "Status: Done";
            }
            else {
                status.textContent = "Status: Not Done";
            }
        });
        let container2 = document.createElement("div");
        container2.classList.add("card");
        let title = document.createElement('h3');
        let id = document.createElement('p');
        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;
        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(button);
        container.appendChild(select);
        container.appendChild(status);
        todosContainer?.appendChild(container);
    });
}
