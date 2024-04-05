const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"]

/* Declaring the alternative text for each image file */
const alt_descriptions = {"pic1.jpg" : "Closeup of a human eye", "images/pic2.jpg" : "Patterened rock wall", "images/pic3.jpg" : "Purple and white flowers", "images/pic4.jpg" : "Ancient Egyptian hyroglifics", "images/pic5.jpg" : "Moth on leaf"}

/* Looping through images */
for(x in images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[x]);
    newImage.setAttribute('alt', alt_descriptions[x]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', clickedImaged => {
        displayedImage.src = clickedImaged.target.src,
        displayedImage.alt = clickedImage.target.alt
    });
}

/* Wiring up the Darken/Lighten button */


btn.addEventListener('click', changeBrightness)

function changeBrightness() {
    const brightness = btn.getAttribute('class')
    if (brightness === 'dark') {
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5';
        btn.textContent = "Lighten";
    }
    else {
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = "Darken";
    }
}

