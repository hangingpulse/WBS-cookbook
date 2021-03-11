
// Recipe Objects: All of our recipes with their attributes that are important (easily extendable)

const recipes = [
    {
        title: 'Penne all\'Arrabiata',
        type: 'Penne',
        img: 'img/penne-arrabiata-card.jpg',
        link: 'recipes/penne-arrabiata.html',
    },

    {
        title: 'Penne Gorgonzola',
        type: 'Penne',
        img: 'img/penne-gorgonzola-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },

    { 
        title: 'Spaghetti Carbonara',
        type: 'Spaghetti',
        img: 'img/spag-carbonara-card.jpg',
        link: 'recipes/spag-carbonara.html'
    },

    {
        title: 'Spaghetti Bolognese',
        type: 'Spaghetti',
        img: 'img/spag-bolognese-card.jpg',
        link: 'recipes/spag-bolognese.html'
    },

    {
        title: 'Spaghetti Aglio e Olio',
        type: 'Spaghetti',
        img: 'img/spag-aglio-olio-card.jpg',
        link: 'recipes/spag-aglio-olio.html'
    },
    {
        title: 'Linguine with sage butter',
        type: 'Various',
        img: 'img/ling-sage-butter-card.jpg',
        link: 'recipes/ling-sage-butter.html'
    },
    {
        title: 'Spaghetti Puttanesca',
        type: 'Spaghetti',
        img: 'img/spag-puttanesca-card.jpg',
        link: 'recipes/spag-aglio-olio.html'
    },
    {
        title: 'Spaghetti Lemon & Garlic',
        type: 'Spaghetti',
        img: 'img/spag-lemon-garlic-card.jpg',
        link: 'recipes/spag-aglio-olio.html'
    },
    {
        title: 'Spaghetti Carretteira',
        type: 'Spaghetti',
        img: 'img/spag-carretteira-card.jpg',
        link: 'recipes/spag-aglio-olio.html'
    },
    {
        title: 'Penne with Pea Pesto',
        type: 'Penne',
        img: 'img/penne-pea-pesto-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Penne Rosa',
        type: 'Penne',
        img: 'img/penne-rosa-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Penne with Chicken',
        type: 'Penne',
        img: 'img/penne-chicken-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Penne with Asparagus',
        type: 'Penne',
        img: 'img/penne-asparagus-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Lasagna Classic',
        type: 'Lasagna',
        img: 'img/lasagna-classic-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Lasagna with Spinach',
        type: 'Lasagna',
        img: 'img/lasagna-spinach-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Lasagna with Squash',
        type: 'Lasagna',
        img: 'img/lasagna-squash-broccoli-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },    
    {
        title: 'Tagliatelle with Salmon',
        type: 'Various',
        img: 'img/tagliatelle-salmon-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    },
    {
        title: 'Orecchiette della Nonna',
        type: 'Various',
        img: 'img/ore-della-nonna-card.jpg',
        link: 'recipes/penne-gorgonzola.html'
    }

]


// OOP Version of recipes

class Recipe {
    constructor(title, type, id, favorite=false) {
        this._title = title;
        this._type = type;
        this._id = id
        this._img = `img/${id}-card`;
        this._link = `recipes/${id}.html`;
        this._favorite = favorite;
    }
    loadRecipe(event) { // Edit this!
        let cardName = $(event.target).parent().attr('name')
        let recipeIndex = cards[cardName].currRecipe;
        $('#recipe').load(recipes[recipeIndex].link)
    }
    toggleFavorite() {
        if (!this._favorite) {
            this._favorite = true;
        } else {
            this._favorite = false;
        }
    }
}

class RecipeList {
    constructor(name, ...recipes) {
        this._name = name
        this._recipes = [...recipes]
    }
    fillList(...recipes) {
        this._recipes.push(...recipes)
    }
    filterList(recipeType) {
        return this._recipes.filter(recipe => recipe._type === recipeType)
    }
    shuffleList() {
        const arr1 = this._recipes.map((a) => ({sort: Math.random(), value: a}))
        const arr2 = arr1.sort((a, b) => a.sort - b.sort)
        this._recipes = arr2.map((a) => a.value)
    }
}

const allRecipes = new RecipeList('All Recipes')
const penneArrabiata = new Recipe("Penne all'Arrabiata", 'Penne', 'penne-arrabiata');
const penneGorgonzola = new Recipe('Penne Gorgonzola', 'Spaghetti', 'penne-gorgonzola');
const spagCarbonara = new Recipe('Spaghetti Carbonara', 'Spaghetti', 'spag-carbonara');
const oreDellaNonna = new Recipe('Orecchiette della Nonna', 'Various', 'ore-della-nonna');
const tagSalmon = new Recipe('Tagliatelle with Salmon', 'Various', 'tag-salmon');
const lasagnaSquash = new Recipe('Lasagna with Squash', 'Lasagna', 'lasagna-squash');
const lasagnaSpinach = new Recipe('Lasagna with Spinach', 'Lasagna', 'lasagna-spinach');
const lasagnaClassic = new Recipe('Lasagna Classic', 'Lasagna', 'lasagna-classic');
const penneRosa = new Recipe('Penne Rosa', 'Penne', 'penne-rosa');
const penneAsparagus = new Recipe('Penne with Asparagus', 'Penne', 'penne-asparagus');
const pennePeaPesto = new Recipe('Penne with Pea Pesto', 'Penne', 'penne-pea-pesto');
const penneChicken = new Recipe('Penne with Chicken', 'Penne', 'penne-chicken');
const spagCarretteira = new Recipe('Spaghetti Carretteira', 'Spaghetti', 'spag-carretteira');
const spagLemonGarlic = new Recipe('Spaghetti Lemon & Garlic', 'Spaghetti', 'spag-lemon-garlic');
const spagPuttanesca = new Recipe('Spaghetti Puttanesca', 'Spaghetti', 'spag-puttanesca');
const lingSageButter = new Recipe('Linguine with Sage Butter', 'Various', 'ling-sage-butter');
const spagAglioOlio = new Recipe('Spaghetti Aglio e Olio', 'Spaghetti', 'spag-aglio-olio');
const spagBolognese = new Recipe('Spahetti Bolognese', 'Spaghetti', 'spag-bolognese');

allRecipes.fillList(
    penneArrabiata, 
    penneGorgonzola,
    spagCarbonara,
    spagBolognese,
    spagAglioOlio,
    lingSageButter,
    spagPuttanesca,
    spagLemonGarlic,
    spagCarretteira,
    penneChicken,
    pennePeaPesto,
    penneAsparagus,
    penneRosa,
    lasagnaClassic,
    lasagnaSpinach,
    lasagnaSquash,
    tagSalmon,
    oreDellaNonna
    )

const penneRecipes = new RecipeList('Penne', ...allRecipes.filterList('Penne'))

// Card Objects: All the cards we see in the gallery (should be extendable to more cards)

const cards = [
    {
        title: document.querySelector('#card1 .card-title'),
        text: document.querySelector('#card1 .card-text'),
        img: document.querySelector('#card1 .card-img-top'),
        currRecipe: 0 
    },
    {
        title: document.querySelector('#card2 .card-title'),
        text: document.querySelector('#card2 .card-text'),
        img: document.querySelector('#card2 .card-img-top'),
        currRecipe: 1
    },
    {
        title: document.querySelector('#card3 .card-title'),
        text: document.querySelector('#card3 .card-text'),
        img: document.querySelector('#card3 .card-img-top'),
        currRecipe: 2
    }
]

// Card Objects as a Class
class Card {
    constructor(index){
        this._title = document.querySelector(`#card${index} .card-title`)
        this._img = document.querySelector(`#card${index} .card-img-top`)
        this._currRecipe = index
    }
    fillCard(recipeList) {
        this._title.innerText = recipeList._recipes[this._currRecipe]._title;
        this._img.src = recipeList._recipes[card.currRecipe]._img;
        // Add in favorite feature here
    }
    loadRecipe() { // Edit this!
        $('#recipe').load(recipes2._recipes[this._currRecipe].link)
    }

}


// Load Recipe with OOP Methods
$('.card-gallery').click((event) => {
    const cardIndex = $(event.target).parent().attr('name')
    cards[cardIndex].loadRecipe()
})


const card0 = new Card(0);
const card1 = new Card(1);
const card2 = new Card(2);
const cards2 = [card0, card1, card2];