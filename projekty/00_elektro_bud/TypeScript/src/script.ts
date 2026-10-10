const name_inp: HTMLInputElement | null = document.querySelector("#name_inp");
const ean_inp: HTMLInputElement | null = document.querySelector("#ean_inp");
const category_inp: HTMLInputElement | null = document.querySelector("#category_inp");
const location_inp: HTMLInputElement | null = document.querySelector("#location_inp");
const add_btn: HTMLButtonElement = document.querySelector("#add_btn")!;
const products_container: HTMLDivElement = document.querySelector("#products_container")!;


type Product = {
    name: string,
    ean: string,
    category: string,
    location: string,
}

const STORAGE_KEY = "elektro-bud-products";

let products: Product[] = [];


if (name_inp && ean_inp && category_inp && location_inp && add_btn && products_container) {
    function loadProducts() {
        const savedProducts = localStorage.getItem(STORAGE_KEY);
        if (savedProducts === null) return [];
        const parsedData = JSON.parse(savedProducts);        
        return parsedData
    }

    function saveProducts() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    }

    function renderProduct(product: Product) {
        let product_container = document.createElement("div");
        product_container.classList.add("product_container");

        let product_name = document.createElement("h3");
        product_name.innerText = "Nazwa: " + product.name;

        let product_ean = document.createElement("p");
        product_ean.innerText = "Kod EAN: " + product.ean;

        let product_category = document.createElement("p");
        product_category.innerText = "Kategoria: " + product.category;
    
        let product_location = document.createElement("p");
        product_location.innerText = "Miejsce przechowywania: " + product.location;

        product_container.appendChild(product_name);
        product_container.appendChild(product_ean);
        product_container.appendChild(product_category);
        product_container.appendChild(product_location);
        product_container.appendChild(document.createElement("br"));

        products_container.appendChild(product_container);
    }
    
    products = loadProducts();
    
    products.forEach(product => {
        renderProduct(product)
    })

    add_btn?.addEventListener("click", () => {
        if (!name_inp.value || !ean_inp.value || !category_inp.value || !location_inp.value) {
            alert("Uzupelnij wszystkie pola");
            return;
        }

        const product = ({
            name: name_inp.value,
            ean: ean_inp.value,
            category: category_inp.value,
            location: location_inp.value
        });

        name_inp.value="";
        ean_inp.value="";
        category_inp.value="";
        location_inp.value="";

        products.push(product);
        saveProducts();
        renderProduct(product);
    })

}