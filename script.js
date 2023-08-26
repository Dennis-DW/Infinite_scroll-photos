const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialload = true;

//UNSPLASH API

const count = 30;
const apiKey = 'aSe6U4aqLbRg2HQf-8fDJordDSjTh2EW-hNjKdbm2BY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// CHECK IF ALL IMAGES ARE LOADED
function imageLoaded() {

    // Increment the `imagesLoaded` counter by 1
    imagesLoaded++;

    // Check if the number of loaded images is equal to the total number of images
    if (imagesLoaded === totalImages) {
        // If all images have been loaded:
        
        // Set the `ready` flag to true, indicating that the page is ready for more images to load
        ready = true;
        
        // Hide the loader element (presumably a loading indicator)
        loader.hidden = true;
    
        // console.log('ready=', ready);
    }
}

// HEPLER FUNCTON TO SET ATTRIBUTES IN DOM ELEMENTS

// This function sets multiple attributes on a DOM element.
function setAttributes(element, attributes) {
    // Loop through each attribute in the 'attributes' object.
    for (const key in attributes) {
        // 'key' represents the attribute name, and 'attributes[key]' represents its value.
        
        // Set the attribute on the DOM element using 'setAttribute'.
        element.setAttribute(key, attributes[key]);
    }
}

// CREATE ELEMENTS FOR LINKS AND PHOTOS DOM

function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;

    // console.log('total images', totalImages);

    // RUN FUNCTION FOR EACH OBJECT IN PHOTOS ARRAY

    photosArray.forEach((photo) => {

        // CREATE<A> TO LINK TO UNPLASH

        const item = document.createElement('a');
        const img = document.createElement('img');

        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');

        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // CREATE IMAG FOR PHOTO
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            tittle: photo.alt_description,
        });

        // CHECK WHEN EACH IS LOADING: EVENT LISTENER

        img.addEventListener('load', imageLoaded);

        // PUT IMG INSIDE THEN PUT THEM IN IMG CONTAINER

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// GET PHOTOS FROM UNSPLASH API

async function getPhotos() {
    try {
        // Use the Fetch API to make an asynchronous network request to the apiUrl.
        const response = await fetch(apiUrl);
        
        // Check if the response status is not okay (e.g., not 200 OK).
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // If the response is okay, parse it as JSON and store it in the photosArray.
        photosArray = await response.json();
        
        // Call the displayPhotos function to render the retrieved photos.
        displayPhotos();
    } catch (error) {
        // If any errors occur in the try block, catch and handle them here.

        // Log the error message to the console for debugging.
        console.error('Error:', error);
    }
}


// LOAD MORE PHOTOS WHEN SCROLL NEAR BOTTOM

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to a certain point on the page and if 'ready' is true
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        // If the condition is met, call the 'getPhotos' function to load more photos
        getPhotos();
        // Set 'ready' to false to prevent further loading until the new photos are ready
        ready = false;

        // You can uncomment the following line for debugging or logging purposes
        // console.log('load more');
    }
});


// ON LOAD

getPhotos();