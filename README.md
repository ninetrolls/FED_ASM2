# FED_ASM2
This repository is for Meng Zhi and Hai Wen's FED Assignment 2. This project is basically a ecommerce website that allows the user to browse through the products sold on the website. The website allows the user to claim vouchers and allow the users to add products to cart. The users are then able to edit the wuantity of the products they have in their cart and will be able to see the total price of the products in their cart get tallied up. The user would be able to sign up and log into the website. 

# Design Process
We have used the websites of other ecommerce websites as our inspiration to our website aethetics and layout. This website is mostly aimed towards millenials and teenagers, as such, we have decided to go with the main colors black and white in order to appeal to our target audience. We ensured that the website would not seem cluttered and is very minimalistic. We think that this would appeal to our target audience and allow them to be more attracted to using our website. 

The users would be using our website for commercial purposes. As such, the website would need to allow the users to easily access the products they want to purchase. With the layout of our website, it ensures that our products are evenly spaced out, to prevent overcrowding of the displayed products. When the user adds a product to cart, it will be automatically added to the cart page where all other products added by the user will be displayed with the total price tallied and displayed at the bottom. This allows the user to have a good user experience as they are able to easily access their products through the home page and their cart. 

The cart page is equipped with functions that allows the users to easily edit the products in their cart and will tally up the total price of the items in the cart. This further improves the experience the users will have when using our website. 

User Stories: 
1) As a user that is in my teens, I want to be able to easily browse through the products on any ecommerce page and be able to easily filter out products that I will be more interested in. This will allow me to focus more on the things I am more interested in.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory) Include the Adobe XD wireframe as a folder. You can include the XD share url.
Wireframe link:
https://www.figma.com/file/pybchirpnycuWkPNk3SasM/FED-ASM-2?type=design&node-id=0%3A1&mode=design&t=UgrG3BPoCffFrlyH-1

# Existing Features 
Feature 1 - The user will be able to log into the website using their own personal username and password. The user would need to press the login button and it would direct them to the Home page.

Feature 2 - Once logged in to the website, the user would be able to use the navigation bar to easily access all the pages in the website. The navigation bar would be fixed to the top even if the user scrolls down, this enables the user to easily acces the other webpages whenever they want.

Feature 3 - The Home page is where all the products will be displayed. In order to maximise user experience, we have created a filter which is located right at the top of all displayed products. By pressing the buttons, the user will be able to filter out the other products and only focus on specific product categories such as "Women's Clothing" or "Jewelry". 

Feature 4 - Each product has a "Add to Cart" button. This button allows the user to add a product to the Cart page without being redirected to it. The product and the price would be automatically displayed on the Cart page. When the button is pressed and the product had been added, a notification would alert the user that the product has been added to their cart. 

Feature 5 - On the Cart page, all products that has been added by the user using the "Add to Cart" button would be displayed along with their price. 

Feature 6 - The products on the Cart page would also have its quantity shown along with buttons that increases and decreases the the quatity of the product. The user can also delete a product they do not want by simply pressing the minus button all the way until it hits 0.

Feature 7 - The prices of the products added to the cart would also be automatically calculated and updated to what ever product the user adds or deletes from the cart. The total price would be displayed at the bottom so it is easily seen by the user. 

Feature 8 - On the rewards page, it displays the vouchers the user can claim. The vouchers have randomly generated percentages achieved by using some JavaScripting. In order to claim the voucher, the user would have to click on the "Claim (percentage) Discount Voucher" button. Once the user has pressed the button, the entire voucher would be moved to a seperate section, the "Your Vouchers" section. 

Feature 9 - In order to allow the user to easily acces their own vouchers and the vouchers they can claim, a dropdown button was added to the side of the webpage. This would allow the user to jump straight to the different sections without needing to scroll all the way down or all the way up.

Feature 10 - On the About Us page, the user will be able to be directed to the social media pages of the shop.


# Additional features to be implemented in the future
Feature 1 - A mini game can be implemented for users to gain points and claim vouchers.

# Technologies Used
1) Visual Studio Code
   https://code.visualstudio.com/
   This is the main editor used to write the code for the entire project.
   
2) Figma
   https://www.figma.com/downloads/
   This is the software used in order to make the wireframes needed to plan the layout of the website.

3) Fake store API
   https://fakestoreapi.com/products
   This is the API used in order to get the pictures and prices of the products.

4) HTML
   HTML was used to create the structures of the webpages and the buttons.
   
5) CSS
   CSS was used to style the HTML structures, including the layout, fonts and colors.
   
6) JavaScript
   This project utitlizes JavaScript for various functions such as:
   - DOM Manipulation
   - Event Handling
   - AJAX
   - LocalStorage
   - Conditional Statements and Loops

7) Fetch API
   Used to make the HTTP requests to the external API

8) RESTful API
   The code interacts with a RESTful API for user authentication and product data retrieval.

9) JSON
   JSON is used for exchanging data between the client and server. The code parses JSON responses received from API requests and stringifies JavaScript objects for storage in localStorage.

10) ES6 Features
    The code utilizes features introduced in ECMAScript 6 (ES6) such as const and let for variable declarations, arrow functions (() => {}), template literals (``), and object destructuring.

11) Promises
    Promises are used for handling asynchronous operations and managing the flow of data returned from API requests.

12) Event-driven Programming
    The code follows an event-driven programming paradigm, where actions performed by the user (e.g., clicking buttons, submitting forms) trigger corresponding event handlers.

13) Error Handling
    Error handling mechanisms such as .catch() are implemented to handle errors that may occur during API requests.

14) Conditional Rendering
    The code conditionally renders elements based on certain conditions (e.g., displaying login/signup forms, showing success messages, updating cart quantity).

15) Navigation
    JavaScript is used for navigating users to different pages within the application by modifying the window.location.href.

16) Random Number Generation
    JavaScript's Math.random() function is used to generate random discount percentages for voucher claims.

17) Template Cloning
    The code clones HTML templates using cloneNode() to dynamically create product cards for display.

18) Form Data Handling
    The code uses FormData to extract form data (e.g., username and password) submitted by users.

# Credits 
Content
The images, name and pricing of the products used in the Home page are fetched from the below linked API:
https://fakestoreapi.com/products

Code for the JavaScripting done to the cart.js and the "Add to Cart" button in the index.js was fixed and achieved with the help of the link below:
https://chat.openai.com/c/3b21d3d3-76a2-4a29-843c-ecaa598303a3

Code for the JavaScripting done to the rewards-vouchers.js was fixed and achieved with the help of

Acknowledgements
This project was inspired from various ecommerce websites with very mainstream layouts done. 
