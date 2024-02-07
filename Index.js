//HOMEPAGE

// Get the product card template
const template = document.getElementById('product-card-template');
let allProducts; // To store all products

// Fetch all products from the API
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    allProducts = products; // Store all products
    displayProducts(products); // Display all products initially
  })
  .catch(error => console.error(error));

// Function to filter products based on category
function filterProducts(category) {
    const filteredProducts = allProducts.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('product-cards');
    productList.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const card = template.content.cloneNode(true);

        card.querySelector('img').src = product.image;
        card.querySelector('.product-name').textContent = product.title;
        card.querySelector('.product-price').textContent = `$${product.price}`;

        productList.appendChild(card);
    });
}

// Initialize the page
async function init() {
    const products = await fetchProducts();
    displayProducts(products);
}

init();

// Function to display all products
function displayAllProducts() {
    displayProducts(allProducts);
}

//ADD TO CART FEATURE
// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add an event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the product data from the nearest parent card
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.slice(1));

        // Get the quantity value from the nearest quantity input
        const quantityInput = productCard.querySelector('.quantity-input');
        const quantity = parseInt(quantityInput.value);

        // Add the product to the cart
        addProductToCart(productName, productPrice, quantity);

        // Optionally, you can display a success message or show the updated cart
        displaySuccessMessage(`${productName} has been added to the cart with a quantity of ${quantity}!`);
    });
});

// Get all the "Quantity" buttons
const quantityButtons = document.querySelectorAll('.quantity-button');

// Add an event listener to each button
quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the nearest parent card
        const productCard = button.closest('.product-card');

        // Get the quantity input element
        const quantityInput = productCard.querySelector('.quantity-input');

        // Get the current quantity value
        let quantity = parseInt(quantityInput.value);

        if (button.classList.contains('plus')) {
            // If the button is the "Plus" button, increment the quantity
            quantity++;
        } else if (button.classList.contains('minus') && quantity > 1) {
            // If the button is the "Minus" button and the quantity is greater than 1, decrement the quantity
            quantity--;
        }

        // Update the quantity input value
        quantityInput.value = quantity;
    });
});

// Example function to add a product to the cart
function addProductToCart(productName, productPrice, quantity) {
    // Here, you can define how you want to add the product to the cart
    // You can use an array, an object, or any other data structure that suits your needs

    const cart = [];
    const existingProduct = cart.find(item => item.productName === productName);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ productName, quantity, productPrice });
    }

    // Store the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Example function to display a success message
function displaySuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.textContent = message;
    successMessage.classList.add('success-message');

    document.body.appendChild(successMessage);

    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}