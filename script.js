//topnav function for smaller screen sizes
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//Outdoor quote carousel
const quoteContainer = document.getElementById('quote');

const quotes = {
    outdoors: ['Waking up early on a weekend to hit the trail is a sacrifice made well worth it when you reach a mountain top in time to catch the sunrise.', 'When you are hiking through a forest, you have the chance to see the natural world up close.', 'Modern life has made the draw of home stronger than ever, but taking the time to unplug and hit the trail is the perfect way to reset and reassess your priorities.', 'The good tidings of the mountains are a real thing, just ask any thru-hiker, backpacker, or climber.', 'We agree with Muir, we get a lot more than a great workout out of every hike we take. '],
}

const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

let quotesToPost = [];

for (prop in quotes) {
    let optionIdx = randomNumber(quotes[prop].length)
    switch(prop) {
        case 'outdoors':
            quotesToPost.push(`${quotes[prop][optionIdx]}`)
            break
        default:
            quotesToPost.push(`Nothing to post today`)
    }
}

const formatQuote = () => {
    const formatted = quotesToPost.join('\n ')
    quoteContainer.innerText = formatted;
}

formatQuote(quotesToPost);

//Home page slideshow
let carousel = document.getElementById('slide')

let i = 0;
let images = [];
let time = 5000;

images[0] = './Resources/pano1.jpeg';
images[1] = './Resources/pano2.jpeg';
images[2] = './Resources/pano3.jpeg';
images[3] = './Resources/pano4.jpeg';

function changeImg() { 
    carousel.src = images[i];

    if (i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

//Weather widget
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');