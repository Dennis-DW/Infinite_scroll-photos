 # Infinite Scroll 

This is a simple infinite scroll web application that fetches images from the Unsplash API and displays them on the page. The user can scroll down to load more images.

### Step 1: HTML

The HTML file contains the basic structure of the web page. It includes a `<head>` section with the necessary meta tags and a `<body>` section with the main content of the page. The main content includes a heading, a loader, and an image container.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infinite Scroll</title>
    <link rel="stylesheet" href="style.css">
</head>
<!-- TITTLE-->
<h1>UNSPLASH API - INFINITE SCROLL</h1>
<!-- LOADER -->
<div class="loader" id="loader">
    <img src="loader.svg" alt="loading">
</div>
<!-- IMAGE CONTAINER -->
<div class="image-container" id="image-container">
    <!-- <img src="https://images.unsplash.com/photo-1692035473930-3a51eea5412e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="">
    <img src="https://images.unsplash.com/photo-1692035473930-3a51eea5412e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="">
    <img src="https://images.unsplash.com/photo-1692035473930

