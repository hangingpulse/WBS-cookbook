
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
