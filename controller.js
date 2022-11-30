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

    // for(let k = 0; k < middag[j].ingredients.length; k++) {
    //     //Looper gjennom hver av ingrediensene til middagene
    //     let ingrediens = middag[j].ingredients[k];
    //     if (availableIngredients.includes(ingrediens)) {
    //         matchingIngredient++;
    //         if(matchingIngredient == middag[j].ingredients.length) {
    //             matchingIngredient = 0;
    //             console.log("MAAATCH: " + middag[j].name);
    //         }
    //     } else {
    //         matchingIngredient = 0;
    //     }

    // }

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

function newfunc() {
}

function johnny() {
    console.log(model.middager);
}