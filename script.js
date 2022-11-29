//MODEL
const app = document.getElementById("app");

model = {
    middager: [
        { name: "Taco", ingredients: ["Kjøttdeig", "Lomper"] },
        { name: "Pizza", ingredients: ["Pizzabunn", "Tomatsaus", "Ost"] },
        { name: "Hamburger", ingredients: ["Hamburgerbrød", "Kjøtt"] },
        { name: "Bakt Potet", ingredients: ["Potet", "Aluminiumsfolie", "Kjøttdeig"] },
    ]
}

const middag = model.middager;

const ingredienser = collectIngredients();

const middagsListe = [];

const availableIngredients = [];

let showIngredients = false;

//VIEW
updateView();
function updateView() {
    let showIngredientsButton = showIngredients ? `${addIngredients()}` : `<button onclick="toggleShowIngredients()">Se hva du kan lage!</button>`;

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
                    <div id="liste">${updateList()}</div>
                </div>
                ${showIngredientsButton}
            </div>
        </div>
        `;
}

function updateList() {
    let value = "";

    for (let i = 0; i < middagsListe.length; i++) {
        value += `<p onclick="removeFromList(${i})">`;
        value += middagsListe[i].name;
        value += "</p>"
    }

    return value;
}

function addFood() {
    let value = "";
    for (let i = 0; i < middag.length; i++) {
        value += `<div onclick="addToList(${i})" class='recommendation'>${middag[i].name}</div>`;
    }
    return value;
}

function addIngredients() {
    let value = `
        <button onclick="toggleShowIngredients()">Gjem liste</button>
        <table class="table">
            <tr>
                <th>Ingrediens</th>
                <th>Har?</th>
            </tr>`;
    for (let i = 0; i < ingredienser.length; i++) {
        value += `
            <tr>
                <td>${ingredienser[i]}</td>
                <td><input id="${ingredienser[i]}Check" type="checkbox"></td>
            </tr>
        `;
    }
    value += `
        </table>
        <button onclick="checkIngredients()">Se hva du kan lage!</button>
    `;
    return value;
}


//CONTROLLER
function collectIngredients() {
    let tempArray = [];

    for (let i = 0; i < middag.length; i++) { //Looper gjennom alle middager
        for (let j = 0; j < middag[i].ingredients.length; j++) { //Looper gjennom alle ingredienser i middager
            let tempIngredienser = middag[i].ingredients[j];
            if (!tempArray.includes(tempIngredienser)) {
                tempArray.push(tempIngredienser);
            }
        }
    }

    return tempArray;
}

function checkIngredients() {

    availableIngredients.splice(0, availableIngredients.length);

    for(let i = 0; i < ingredienser.length; i++) {
        if(document.getElementById(`${ingredienser[i]}Check`).checked) {
            if(!availableIngredients.includes(ingredienser[i])) {
                availableIngredients.push(ingredienser[i]);
            }
        }
    }

    for(let j = 0; j < middag.length; j++) {
        //Looper gjennom hver av middagene
        for(let k = 0; k < middag[j].ingredients.length; k++) {
            //Looper gjennom hver av ingrediensene
            

        }

        if(availableIngredients.includes(middag[j].ingredients)) {
            console.log("INNEHOLDER");
        }
        // if(middag[j].ingredients.includes(availableIngredients)) {
        //     console.log("INNEHOLDER")
        // }
    }

}

function addToList(index) {
    if (middagsListe.includes(middag[index])) { return; }
    middagsListe.push(middag[index]);
    updateView();
}

function removeFromList(index) {
    middagsListe.splice(index, 1);
    updateView();
}

function toggleShowIngredients() {
    showIngredients = !showIngredients;
    updateView();
}
