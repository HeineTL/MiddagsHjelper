function collectIngredients() {
    let tempArray = [];

    for (let i = 0; i < middag.length; i++) {
        for (let j = 0; j < middag[i].ingredients.length; j++) {
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

    for (let i = 0; i < ingredienser.length; i++) {
        if (document.getElementById(`${ingredienser[i]}Check`).checked) {
            if (!availableIngredients.includes(ingredienser[i])) {
                availableIngredients.push(ingredienser[i]);
            }
        }
    }

    checkPossibleDinners();

}

function checkPossibleDinners() {
    for (let i = 0; i < model.middager.length; i++) {
        let temp = 0;
        for (let j = 0; j < model.middager[i].ingredients.length; j++) {
            for (let k = 0; k < availableIngredients.length; k++) {
                if (availableIngredients[k] == model.middager[i].ingredients[j]) {
                    temp++;
                    if (temp == model.middager[i].ingredients.length) {
                        if(!possibleDinners.includes(model.middager[i].name)) {
                            possibleDinners.push(model.middager[i].name);
                        }
                    }
                }
            }
        }
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
function toggleShowFilters() {
    showFilter = !showFilter;
    updateView();
}

function sort(filter) {
    for(let i = 0; i < model.allergies.length; i++) {

        const modelIndex = model.allergies.findIndex(object => {
                 return object.name === filter;
               });

        if(model.allergies[i].name == filter) {
            let filterButton = document.getElementById(filter+"Check");
            if(filterButton.checked) {
                allergyList.push(model.allergies[modelIndex]);
            } else {
                let tempIndex = allergyList.indexOf(model.allergies[modelIndex]);
                allergyList.splice(tempIndex, 1);
            }
        }
    }

}

function filterRemove() {

    for (let i = 0; i < allergyList.length; i++) {
        for (let j = 0; j < model.allergies[i].cant_eat.length; j++) {
            for (let k = 0; k < model.middager.length; k++) {
                if (model.middager[k].ingredients.includes(allergyList[i].cant_eat[j])) {
                    if(!removedMeals.includes(model.middager[k].name)) {
                        removedMeals.push(model.middager[k].name);
                    }
                }
            }
        }
    }
    

    toggleShowFilters();

}

function removeFilters() {
    allergyList.splice(0, allergyList.length);
    removedMeals.splice(0, removedMeals.length);

    updateView();
}