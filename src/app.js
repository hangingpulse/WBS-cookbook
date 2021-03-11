

// nShare button



const shareButton = document.querySelector("share");
console.log(shareButton);

$( document ).ready(function() {
    //custom button for homepage
    $( ".share-btn" ).click(function(e) {
         $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
            $(this).removeClass("active");
        });
        $(this).next( ".networks-5" ).toggleClass( "active" );
   });   
});

// Content of the Recipe Slot that loads as the default (curently Arrabiata recipe)

$(document).ready(() => {
    $('#recipe').load('recipes/spag-carbonara.html');
    $('.btn-all-recipes').addClass('btn-pasta-selected')
})


// Storing recipes in a different variable so that we can filter the list but still keep the original recipe array untouched
let currRecipeList = recipes 


// Functions to fill the cards (combine them with the recipes from the current recipe selection)

const fillCard = (card, recipeList) => {
    card.title.innerText = recipeList[card.currRecipe].title;
    card.img.src = recipeList[card.currRecipe].img;
    $(card.cardNumber).attr('href', recipeList[card.currRecipe].link)
}

const fillCards = () => {
    cards.forEach(card => {
        fillCard(card, currRecipeList);
    });
}

fillCards()

// Buttons and Gallery function

const btnCardsRight = document.querySelector('#btn-cards-right');
const btnCardsLeft = document.querySelector('#btn-cards-left');

// Gallery version w/ Scrolling Effect:

$('#btn-cards-right').click(() => {
    cards.forEach(function(card) {
        if (card.currRecipe === currRecipeList.length - 1) {
            card.currRecipe = 0;
        } else {
            card.currRecipe++;   
        }
    })
    $('#card3').css({
        animation: "card1 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[2], currRecipeList)
    }, 125)
    $('#card2').css({
        animation: "card2 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[1], currRecipeList)
    }, 250)
    $('#card1').css({
        animation: "card3 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[0], currRecipeList)
    }, 375)
    setTimeout(() => {
        $('.card-gallery').css({
            animation: ""
        })    
    }, 500)
})

$('#btn-cards-left').click(() => {
    cards.forEach(function(card) {
        if (card.currRecipe === 0) {
            card.currRecipe = currRecipeList.length - 1;
        } else {
            card.currRecipe--;   
        }
    })
    $('#card1').css({
        animation: "card1 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[0], currRecipeList)
    }, 125)
    $('#card2').css({
        animation: "card2 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[1], currRecipeList)
    }, 250)
    $('#card3').css({
        animation: "card3 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[2], currRecipeList)
    }, 375)
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
        currRecipeList = recipes
    } else {
        currRecipeList = recipes.filter(recipe => recipe.type === event.target.innerText)
    }
    fillCards(currRecipeList)
    $(event.target).addClass('btn-pasta-selected')
})





// Links the Cards in the Gallery with the recipes

$('.card-gallery').click((event) => {
    let cardName = $(event.target).parent().attr('name')
    let recipeIndex = cards[cardName].currRecipe;
    $('#recipe').load(recipes[recipeIndex].link)
})


// Old Gallery Code

// btnCardsLeft.addEventListener('click', function() {
//     cards.forEach(function(card) {
//         if (card.currRecipe === 0) {
//             card.currRecipe = recipes.length - 1;
//         } else {
//             card.currRecipe--;   
//         }
//         fillCard(card); 
//     })
// })

// btnCardsRight.addEventListener('click', function() {
//     cards.forEach(function(card) {
//         if (card.currRecipe === recipes.length - 1) {
//             card.currRecipe = 0;
//         } else {
//             card.currRecipe++;   
//         }
//         fillCard(card); 
//     })
// })
