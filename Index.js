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
