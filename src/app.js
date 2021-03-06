
// ****************GALLERY CODE*******************//


let currRecipeList = []
let loadedRecipe

// Creating new Cards and adding them to a list

const card0 = new Card(0);
const card1 = new Card(1);
const card2 = new Card(2);
const recipeCards = [card0, card1, card2];

const fillCards = () => {
    recipeCards.forEach(card => {
        card.fillCard(currRecipeList);
    });
}



// Content of the Recipe Slot that loads as the default (curently Arrabiata recipe)

$(document).ready(() => {

    currRecipeList = allRecipes
    fillCards();
    $('#recipe').load('landingpage.html');
    $('.btn-all-recipes').addClass('btn-pasta-selected')
    document.querySelector('.welcome').addEventListener('click', welcomeImages);
    welcomeImages();
})



// Load Recipe with Selection

$('.card-gallery').click((event) => {
    const cardIndex = $(event.target).parent().attr('name')
    loadedRecipe = currRecipeList._recipes[recipeCards[cardIndex]._currRecipe]
    $('#recipe').load(loadedRecipe._link)
    
})


// Buttons and Gallery function with Animation Effect

const btnCardsRight = document.querySelector('#btn-cards-right');
const btnCardsLeft = document.querySelector('#btn-cards-left');

$('#btn-cards-right').click(() => {
    recipeCards.forEach(function(card) {
        const recipeIndex = card.findIndexOfRecipe(currRecipeList._recipes)
        if (recipeIndex === currRecipeList._recipes.length - 1) {
            card._currRecipe = 0;
        } else {
            card._currRecipe++;
              
        }
    })
    card2.animateCard(0, 125)
    card1.animateCard(1, 250)
    card0.animateCard(2, 375)
    setTimeout(() => {
        $('.card-gallery').css({
            animation: ""
        })    
    }, 500)
})

$('#btn-cards-left').click(() => {
    recipeCards.forEach(function(card) {
        const recipeIndex = card.findIndexOfRecipe(currRecipeList._recipes)
        if (recipeIndex === 0) {
            card._currRecipe = currRecipeList._recipes.length - 1;
        } else {
            card._currRecipe--;   
        }
    })
    card0.animateCard(0, 125)
    card1.animateCard(1, 250)
    card2.animateCard(2, 375)
    setTimeout(() => {
        $('.card-gallery').css({
            animation: ""
        })    
    }, 500)
})

// Dropdown-Menu (or simple Buttons) to choose a specific pasta type

const btnPasta = $('.btn-pasta-select');

btnPasta.click((event) => {
    $('.btn-pasta-select').removeClass('btn-pasta-selected')
    if (event.target.innerText === 'All Recipes') {
        currRecipeList = allRecipes
    } else {
        const filteredList = new RecipeList(event.target.innerText, ...allRecipes.filterList(event.target.innerText))
        currRecipeList = filteredList
    }
    recipeCards.forEach((card) => card.resetCard())
    fillCards(currRecipeList)
    $(event.target).addClass('btn-pasta-selected')
})

//LANDINGPAGE


    