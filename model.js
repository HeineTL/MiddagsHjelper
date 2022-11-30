const app = document.getElementById("app");

model = {
    middager: [
        { name: "Taco", ingredients: ["Kjøttdeig", "Lomper"] },
        { name: "Pizza", ingredients: ["Pizzabunn", "Tomatsaus", "Ost"] },
        { name: "Hamburger", ingredients: ["Hamburgerbrød", "Kjøtt"] },
        { name: "Bakt Potet", ingredients: ["Potet", "Aluminiumsfolie"] },
        { name: "Kyllingburger", ingredients: ["Hamburgerbrød", "Kylling"] },
        { name: "Bruh", ingredients: ["Hamburgerbrød", "Kylling"] },
    ]
}

const middag = model.middager;

const ingredienser = collectIngredients();

const middagsListe = [];

const availableIngredients = [];

const possibleDinners = [];

let showIngredients = false;