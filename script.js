//MODEL
const app = document.getElementById("app");

model = {
    middager: [
        { name: "Taco", ingredients: ["Kjøttdeig", "Lomper"] },
        { name: "Pizza", ingredients: ["Pizzabunn", "Tomatsaus", "Ost"] },
        { name: "Hamburger", ingredients: ["Hamburgerbrød", "Kjøtt"] },
        { name: "Bakt Potet", ingredients: ["Potet", "Aluminiumsfolie"] },
    ]
}

const middag = model.middager;

const ingredienser = [];

//VIEW
updateView();
function updateView() {
    app.innerHTML = /*HTML*/`
        <div class="outer-container">
            <div class="inner-container">
                <h1>Middags Hjelper</h1>
                <button>Filtrer</button>
                <h4>Klikk for å legge til i listen</h2>
                <div class="recommendations">
                    ${addFood()}
                </div>
                <div class="liste">
                    <h1>Liste</h1>
                    <p>Tom</p>
                </div>
                <table class="table">
                <tr>
                    <th>Ingrediens</th>
                    <th>Har?</th>
                </tr>
                ${addIngredients()}
                </table>
                <button>Sjekk hva du kan lage</button>
            </div>
        </div>
    `;
}

function addFood() {
    let value = "";
    for (let i = 0; i < middag.length; i++) { //Looper gjennom alle middager
        value += `<div class='recommendation'>${middag[i].name}</div>`;
        for (let j = 0; j < middag[i].ingredients.length; j++) { //Looper gjennom alle ingredienser i middager
            let tempIngredienser = middag[i].ingredients[j];
            console.log(tempIngredienser);
            if (!ingredienser.includes(tempIngredienser)) {
                ingredienser.push(tempIngredienser);
            }
        }
    }
    return value;
}

function addIngredients() {
    let value = "";
    for (let i = 0; i < ingredienser.length; i++) {
        value += /*HTML*/`
            <tr>
                <td>${ingredienser[i]}</td>
                <td><input id="${ingredienser[i]}Check" type="checkbox"></td>
            </tr>
        `; 
    }
    return value;
}

//CONTROLLER