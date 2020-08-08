// Consts to display Data
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = "OaZggEPeOEeWf0PkOyGaMHCDXMI8klMcpwVk7PJjEjI";
const query = "covid";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=${query}`;

// Helper function to Set attributes on DOM Elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//Create elements for links & photos, add to DOM
function displayPhotos() {
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
   if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
});


//Show Photos on screen
getPhotos();