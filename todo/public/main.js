"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        arrayOfTodos.push({ id: arrayOfTodos.length, title: inputTextField?.value, status: "Not Done" });
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
        option1.textContent = "Not Done";
        let option2 = document.createElement("option");
        option2.textContent = "Done";
        select.appendChild(option1);
        select.appendChild(option2);
        let status = document.createElement("p");
        status.textContent = "Status: " + element.status;
        select.addEventListener('change', (e) => {
            if (element.status === "Not Done") {
                element.status = "Done";
                status.textContent = "Status: " + element.status;
            }
            else {
                element.status = "Not Done";
                status.textContent = "Status: " + element.status;
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
