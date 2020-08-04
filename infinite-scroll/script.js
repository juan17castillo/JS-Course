// Consts to display Data
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []

//Unsplash API
const count = 10;
const apiKey = "OaZggEPeOEeWf0PkOyGaMHCDXMI8klMcpwVk7PJjEjI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Create elements for links & photos, add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        
    })
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
        // getPhotos();
    }
}


//Show Photos on screen
getPhotos();