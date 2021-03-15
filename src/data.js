 // Recipe Class
class Recipe {
    constructor(title, type, id, favorite=false) {
        this._title = title;
        this._type = type;
        this._id = id
        this._img = `img/${id}-card.jpg`;
        this._link = `recipes/${id}.html`;
        this._imgRecipe = `img/${id}-recipe.jpg`;
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



class Card {
    constructor(index){
        this._title = document.querySelector(`#card${index} .card-title`)
        this._img = document.querySelector(`#card${index} .card-img-top`)
        this._currRecipe = index
        this._index = index
    }
    resetCard() {
        this._currRecipe = this._index
    }
    fillCard() {
        this._title.innerText = currRecipeList._recipes[this._currRecipe]._title;
        this._img.src = currRecipeList._recipes[this._currRecipe]._img;
    }
    findIndexOfRecipe() {
        const isOnList = (recipe) => currRecipeList._recipes[this._currRecipe] === recipe
        return currRecipeList._recipes.findIndex(isOnList)
    }
    animateCard(animIndex, timeout) {
        $(`#card${this._index}`).css({
            animation: `card${animIndex} 0.5s`
        })
        setTimeout(() => {
            this.fillCard()
        }, timeout)
    }
}

// Creating all the Recipes


const allRecipes = new RecipeList('All Recipes')

const penneArrabiata = new Recipe("Penne all'Arrabiata", 'Penne', 'penne-arrabiata');
const penneGorgonzola = new Recipe('Penne Gorgonzola', 'Penne', 'penne-gorgonzola');
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
const spagCarretteira = new Recipe('Spaghetti Carrettiera', 'Spaghetti', 'spag-carrettiera');
const spagLemonGarlic = new Recipe('Spaghetti Lemon & Garlic', 'Spaghetti', 'spag-lemon-garlic');
const spagPuttanesca = new Recipe('Spaghetti Puttanesca', 'Spaghetti', 'spag-puttanesca');
const lingSageButter = new Recipe('Linguine with Sage Butter', 'Various', 'ling-sage-butter');
const spagAglioOlio = new Recipe('Spaghetti Aglio e Olio', 'Spaghetti', 'spag-aglio-olio');
const spagBolognese = new Recipe('Spaghetti Bolognese', 'Spaghetti', 'spag-bolognese');

// Adding the Recipes to a new Recipe List

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
