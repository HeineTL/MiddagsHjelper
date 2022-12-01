updateView();
function updateView() {
    let showIngredientsButton = showIngredients ? `${addIngredients()}` : `<button onclick="toggleShowIngredients()">Se hva du kan lage!</button>`;

    let showFilterButton = showFilter ? `${addFilters()}` : `<button onclick="toggleShowFilters()">Filtrer</button>`
    app.innerHTML = /*HTML*/`
        <div class="outer-container">
            <div class="inner-container">
                <h1>Middags Hjelper</h1>
                ${showFilterButton}
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
    for (let i = 0; i < model.middager.length; i++) {
        if(!removedMeals.includes(middag[i].name)) {
            value += `<div onclick="addToList(${i})" class='recommendation'>${middag[i].name}</div>`;
        }
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

    if (possibleDinners.length == 0) {
        DinnerRecommendation.innerHTML = "<p>Du har ingenting å lage! Kom deg på butikken!</p>";
    } else if (possibleDinners.length > 0) {
        DinnerRecommendation.innerHTML = `<p><b>Med det du har kan du lage:</b> ${possibleDinners.join(", ")}</p>`;
    }


}

function addFilters() {
    value = `
    <table class="table">
            <tr>
                <th>Filter</th>
                <th>Fjern?</th>
            </tr>
            `;

            for(let i = 0; i < model.allergies.length; i++) {
                value += `
                <tr>
                <td>${model.allergies[i].name}</td>
                <td><input onclick="sort('${model.allergies[i].name}')" id="${model.allergies[i].name}Check" type="checkbox"></td>
                </tr>
                `;
            }
    value += `
    </table>
    <div class="filters">
        <button onclick="filterRemove()">Oppdater valg</button>
        <button onclick="removeFilters()">Fjern alle filtere</button>
        <button onclick="toggleShowFilters()">Gjem liste</button>
    </div>
    `;
    return value;
}