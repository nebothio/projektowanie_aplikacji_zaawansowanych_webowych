
const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    status?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer){

    addButton?.addEventListener('click',(e) =>{
        arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextField?.value});
        inputTextField.value='';
        buildList();
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card","card-body","mt-1","shadow");

        let id = document.createElement('p');
        id.classList.add("small");

        let title = document.createElement('h3');
        title.classList.add("h3");

        let select = document.createElement("select");
        select.classList.add("w-100");

        let option1 = document.createElement("option");
        option1.textContent = "Doing";

        let option2 = document.createElement("option");
        option2.textContent = "Done";

       if (!element.status) {
            element.status = "Doing";
        }
        select.value = element.status;

        let status = document.createElement('h3');
        status.classList.add("h3");
        status.textContent = "Status: " + element.status;

        select.addEventListener('change', (event: Event) => {
            const target = event.target as HTMLSelectElement;
            element.status = target.value;
            status.textContent = "Status:" + element.status;
        });

        let delButton = document.createElement('button');
        delButton.classList.add("btn", "btn-danger");
        delButton.innerText = "Delete";

        delButton.addEventListener('click', () => {
            deleteTodo(element.id);
        });

        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;


        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(delButton);
        container.appendChild(select);
        container.appendChild(status);

        select.appendChild(option1);
        select.appendChild(option2);

        todosContainer?.appendChild(container);

    });
}

function deleteTodo(id: number) {
    arrayOfTodos = arrayOfTodos.filter(todo => todo.id !== id);
    buildList();
}