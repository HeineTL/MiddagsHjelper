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
        <button onclick="addDinnerRecommendations()">Se hva du kan lage!</button>
        <div id="addDinnerRecommendationsHere"></div>
    `;

    return value;
}

function addDinnerRecommendations() {
    checkIngredients();

    let DinnerRecommendation = document.getElementById("addDinnerRecommendationsHere");

    if(possibleDinners.length == 0) {
        DinnerRecommendation.innerHTML = "<p>Du har ingenting å lage! Kom deg på butikken!</p>";
    } else if(possibleDinners.length > 0) {
        DinnerRecommendation.innerHTML = `<p><b>Med det du har kan du lage:</b> ${possibleDinners.join(", ")}</p>`;
    }


}