

$(document).ready(() => {
  
    document.querySelector(".img--recipe").src = loadedRecipe._imgRecipe
    document.querySelector(".heading--title").innerText = loadedRecipe._title
    console.log(loadedRecipe)
})

// nShare button



$( document ).ready(function() {
    //custom button for homepage
    $( ".share-btn" ).click(function(e) {
         $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
            $(this).removeClass("active");
        });
        console.log('Hello');
        $(this).next( ".networks-5" ).toggleClass( "active" );
   });   
});


// Recipe image hover effect

$(document).ready(function() {
    const recipeItem = document.querySelector('.img--recipe');
    recipeItem.addEventListener('mouseover', () => {
        recipeItem.classList.add('img-darken');
    })

    recipeItem.addEventListener('mouseout', () => {
        recipeItem.classList.remove('img-darken');
    })

})



