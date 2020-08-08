// Consts to display Data
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//Unsplash API
const count = 30;
const apiKey = "OaZggEPeOEeWf0PkOyGaMHCDXMI8klMcpwVk7PJjEjI";
const query = "covid";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=${query}`;

// Helper function to Set attributes on DOM Elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Check if all images were loaded
function imageLoaded () {
    console.log('image loaded');
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        loader.hidden = true;
        ready = true;
        console.log('ready=', ready);
    }
}

//Create elements for links & photos, add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('Total Images =', totalImages);
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
       const item = document.createElement('a');
       setAttributes(item, {
           href: photo.links.html,
           target: '_blank',
       })
       // Create <img> for photos
       const img = document.createElement('img');
       setAttributes(img, {
           src: photo.urls.regular,
           alt: photo.alt_description,
           title: photo.alt_despcription,
    })
    // Event Listener to check when each is finished loading
    img.addEventListener('load', imageLoaded)
    //Put <img> inside <a>, then put both inside the image-container element
    item.appendChild(img);
    imageContainer.appendChild(item);
    });
}


//Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        // console.log(photosArray);
    } catch(error){
        // console.log(error)
    }
}

// Check the scrolling down when it is near to the screen bottom to display more images
window.addEventListener('scroll', () => {
   if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        getPhotos();
        ready = false;
    }
});


//Show Photos on screen
getPhotos();