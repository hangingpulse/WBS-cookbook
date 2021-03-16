
function welcomeImages() {
    document.getElementById('welcomeimg').src=`./img/${imageArray[Math.floor(Math.random()*imageArray.length)]}`;
}

$(document).ready(() => {
    welcomeImages();

})

// nShare button


