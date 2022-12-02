//TODO Fikse filterene
//TODO Veganer filteret funker ikke

const app = document.getElementById("app");

model = {
    middager: [
        { name: "Taco", ingredients: ["Kjøttdeig", "Lomper", "Tacokrydder"] },
        { name: "Pizza", ingredients: ["Pizzabunn", "Tomatsaus", "Ost"] },
        { name: "Hamburger", ingredients: ["Hamburgerbrød", "Kjøtt"] },
        { name: "Bakt Potet", ingredients: ["Poteter", "Aluminiumsfolie"] },
        { name: "Kebab", ingredients: ["Kebabkjøtt", "Pommes frites"] },
        { name: "Spaghetti", ingredients: ["Spaghetti", "Kjøttdeig"] },
        { name: "Lasagne", ingredients: ["Kjøttdeig", "Melk", "Smør", "Hvetemel", "Pastaplater"] },
        { name: "Nuggets og pommes frites", ingredients: ["Nuggets", "Pommes frites"] },
        { name: "Løvbiff", ingredients: ["Løvbiff", "Pommes frites"] },
        { name: "Poteter og kjøttkaker", ingredients: ["Poteter", "Kjøtt", "Brun saus"] },
        { name: "Lapskaus", ingredients: ["Smør", "Buljongterning", "Poteter", "Gulrøtter", "Purre"] },
        { name: "Tomatsuppe", ingredients: ["Løk", "Hvitløk", "Olje", "Hermetiske tomater"] },
        { name: "Wok", ingredients: ["Kjøtt", "Brokkoli"] },
        { name: "Moussaka", ingredients: ["Kjøttdeig", "Ost", "Poteter", "Hermetiske tomater"] },
        { name: "Jegergryte", ingredients: ["Elgkjøtt", "Smør", "Buljongterning", "Hvetemel", "Creme Fraiche"] },
        { name: "Ris og kylling", ingredients: ["Ris", "Kylling"] },
        { name: "Biff Stroganoff", ingredients: ["Kjøtt", "Smør", "Buljongterning", "Creme Fraiche"] },
        { name: "Blomkålsuppe", ingredients: ["Blomkål", "Melk", "Smør"] },
        { name: "Kylling tandoori", ingredients: ["Kylling", "Yoghurt", "Ris", "Diverse krydder"] },
        { name: "Kyllingsalat", ingredients: ["Kylling", "Salat"] },
        { name: "Kremet pasta", ingredients: ["Pasta", "Kylling", "Ost"] },
        { name: "Pannekaker", ingredients: ["Egg", "Hvetemel", "Melk", "Smør"] },
        { name: "Nachos", ingredients: ["Nachos", "Ost"] },
        { name: "Biffsnadder", ingredients: ["Pommes frites", "Kjøtt", "Bearnaise", "Løk", "Paprika", "Melk", "Smør", "Olje"] },
        { name: "Pytt i panne", ingredients: ["Poteter", "Kjøtt", "Smør", "Gulrøtter", "Løk"] },
    ],
    allergies:  [
        {name: "Glutenallergi", cant_eat: ["Lomper", "Pizzabunn", "Hamburgerbrød", "Spaghetti", "Hvetemel", "Pastaplater", "Pasta", "Nachos"]},
        {name: "Vegeterianer", cant_eat: ["Kjøttdeig", "Buljongterning", "Kjøtt", "Kebabkjøtt", "Nuggets", "Elgkjøtt", "Kylling", "Løvbiff"]},
    ],
}

const middag = model.middager;

const ingredienser = collectIngredients();

const middagsListe = [];

const availableIngredients = [];

const possibleDinners = [];

const allergyList = [];

const removedMeals = [];

let showIngredients = false;

let showFilter = false;