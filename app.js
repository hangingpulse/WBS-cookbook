$(document).ready(() => {
    $('#recipe').load('penne-arrabiata.html');
})




// Recipe Objects
const recipes = [
    {
        title: 'Penne all\'Arrabiata',
        text: 'Hot and tasty. A classic',
        img: 'img/arrabiata-card.jpg',
        link: 'penne-arrabiata.html'
    },

    {
        title: 'Penne Gorgonzola',
        text: 'Cheese and Spinach. Delightful',
        img: 'img/penne-gorgonzola-card.jpg',
        link: 'penne-gorgonzola.html'
    },

    {
        title: 'Spaghetti Carbonara',
        text: 'Eggcelent.',
        img: 'img/carbonara.jpg',
        link: 'spag-carbonara.html'
    },

    {
        title: 'Spaghetti Bolognese',
        text: 'Even better in the vegan version',
        img: 'img/bolognese.jpg',
        link: 'spag-bolognese.html'
    },

    {
        title: 'Linguine with sage butter',
        text: 'Addictive.',
        img: 'img/ling-sage-butter.jpg'
    }
]


// Card Objects

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

const fillCard = (card) => {
    card.title.innerText = recipes[card.currRecipe].title;
    card.text.innerText = recipes[card.currRecipe].text;
    card.img.src = recipes[card.currRecipe].img;
    $(card.cardNumber).attr('href', recipes[card.currRecipe].link)
}

const fillCards = () => {
    cards.forEach(card => {
        fillCard(card);
    });
}

fillCards()

// Buttons and Gallery function

const btnCardsRight = document.querySelector('#btn-cards-right');
const btnCardsLeft = document.querySelector('#btn-cards-left');

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


// Link mode 

$('.card-gallery').click((event) => {
    let cardName = $(event.target).parent().attr('name')
    let recipeIndex = cards[cardName].currRecipe;
    $('#recipe').load(recipes[recipeIndex].link)
})


// Gallery version w/ Scrolling Effect:

$('#btn-cards-right').click(() => {
    cards.forEach(function(card) {
        if (card.currRecipe === recipes.length - 1) {
            card.currRecipe = 0;
        } else {
            card.currRecipe++;   
        }
    })
    $('#card3').css({
        animation: "card1 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[2])
    }, 125)
    $('#card2').css({
        animation: "card2 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[1])
    }, 250)
    $('#card1').css({
        animation: "card3 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[0])
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
            card.currRecipe = recipes.length - 1;
        } else {
            card.currRecipe--;   
        }
    })
    $('#card1').css({
        animation: "card1 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[0])
    }, 125)
    $('#card2').css({
        animation: "card2 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[1])
    }, 250)
    $('#card3').css({
        animation: "card3 0.5s"
    })
    setTimeout(() => {
        fillCard(cards[2])
    }, 375)
    setTimeout(() => {
        $('.card-gallery').css({
            animation: ""
        })    
    }, 500)
})