# Unsplash Photo Gallery

This is a web application that displays a gallery of photos fetched from the Unsplash API. Users can scroll through the gallery to view more photos, and the application dynamically loads additional photos as the user reaches the bottom of the page.

## Features

- **Dynamic Photo Loading**: Additional photos are loaded dynamically as the user scrolls down the page.
- **Unsplash Integration**: Photos are fetched from the Unsplash API, providing a wide variety of high-quality images.
- **Responsive Design**: The application's interface is responsive, ensuring optimal viewing across different devices.

## Components

- **imageContainer**: Container element for displaying the gallery of photos.
- **loader**: Element used as a loading indicator while fetching photos.
- **ready**: Flag indicating whether the application is ready to load more photos.
- **imagesLoaded**: Counter tracking the number of images loaded.
- **totalImages**: Total number of photos in the gallery.
- **photosArray**: Array containing the fetched photos from the Unsplash API.
- **initialLoad**: Flag indicating whether it is the initial load of photos.

## Usage

1. Scroll down the page to view more photos.
2. As you reach the bottom of the page, additional photos will be loaded dynamically.
3. Click on any photo to view it on Unsplash's website.

## Implementation Details

- The application fetches photos from the Unsplash API asynchronously using the Fetch API.
- Photos are dynamically loaded as the user scrolls down the page, providing a seamless browsing experience.
- Each photo is displayed as a clickable link, allowing users to view the photo on Unsplash's website.
- The application adjusts its layout and behavior based on the user's interaction and device size.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/Dennis-DW/Infinite_scroll-photos.git
    
    ```

2. Open the `index.html` file in a web browser to use the application.

## Technologies Used

- JavaScript
- Fetch API
- Unsplash API

## Credits

This project is inspired by various photo gallery applications and tutorials available online.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
