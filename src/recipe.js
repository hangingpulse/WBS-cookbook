const imageArray = ['pasta-la-vista1.jpg', 'pasta-la-vista.jpg', 'pasta-bilities.jpg', 'overdressed_pasta.jpg', 'pasta-types.png'];

function welcomeImages() {
    document.getElementById('welcomeimg').src=`./img/${imageArray[Math.floor(Math.random()*imageArray.length)]}`;
}



$(document).ready(() => {
    welcomeImages();
})


// Recipe image hover effect

const recipeItem = document.querySelector('.recipe-img-background');
console.log(recipeItem);


recipeItem.addEventListener('mouseover', () => {
    recipeItem.classList.add('img-darken');
})

recipeItem.addEventListener('mouseout', () => {
    recipeItem.classList.remove('img-darken');
})



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
