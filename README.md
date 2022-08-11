# React e-Shop Website

## Project Outline

The purpose of the e-shop project is to build a website that runs like an e-shop using React and the Firebase/Firestore service. The functionality includes a store page with an interactable carousel and grid of products, and a cart page where products are added from user interaction and has options to both change the quantity of the product to be purchased as well as remove products from the cart.

## How to use the project

This project uses React which is a combination of HTML, CSS, SCSS, JavaScript, and JSX. To run the project you will need to use the terminal and type 'npm start' to run a live server of the project.

## Extensions / Packages

The Extensions used to build this project are:

-   React
-   React-Router-Dom
-   SASS package
-   Firebase/Firestore for database

## MVP

At a minimum the e-shop website should have two pages:

### Home Page

This will contain:

-   A Grid of products
-   Carousel of featured products
-   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants

### All products should be stored in Firestore:

-   You should store the following information:
-   quantity
-   variants (could be colors, sizes, etc)
-   price per unit
-   name
-   image url
-   favourited or not (boolean)

All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

## Cart

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

-   List of products in cart
-   Ability to change quantity of products in cart
-   Ability to remove items from cart

## Project Design and Functionality

While not necessary, I made a home page that had the original purpose of sending the product data into an empty firestore collection, but now it has no purpose other than being the open page.

The store page required a carousel of featured items and a gird of the available products. The carousel has two types of rotations: automatic and manual. For automatic, every two seconds the carousel image will rotate to the next image and if the mouse is over the carousel, it pauses, and when the mouse leaves it unpauses. The manual side has buttons for the previous and next image as well as numbered buttons for each image in the carousel.

The grid includes every product from the database with its on card that displays an image and a bit of text which is the name of the product and is also a link that opens a new page that goes into more detail about the product.

The product page displays the product that the user had previously clicked a link to on the store page. This page displays the products' name, image, stock, rating, description, price, and a favourited button to set the product as favourited in the database. There is also a button on the page that allows users to add the product to their cart.

The cart page displays all the products that are in the cart database. Each product card displays the product image, name, price, quantity, and has a button that can remove the product from the cart. Each product is displayed in its own row and at the top of the page there is a bit of text that tells the user how many products are in the cart.

## What to do differently next time

I would probably spend more time learning more firebase/firestore methods to discover more ways of manipulating data to and from the database. I would also better styling which is not the goal of this project, but I believe that it is still essential to web development.

## Struggles

Struggled mostly with using firebase/firestore as at the time it was still very new to use and needed some time to better understand to a level that this project required.
